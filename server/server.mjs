import express from "express";
import mime from "mime-types";

import * as db from "./db.mjs";

const app = express();
const port = process.env.PORT || 4000;

const businesses = express.Router();

businesses.get("/", async (request, response) => {
  const businesses = await db.getBusinesses();
  response.json(businesses);
});

businesses.use(express.json());
businesses.post("/", async (request, response) => {
  const { name } = request.body;
  const business = await db.addBusiness(name, city, country, lift);
  response.status(201).json(business);
});

app.use("/api/businesses", businesses);

process.env?.SERVE_REACT?.toLowerCase() === "true" &&
  app.use(
    express.static("/app", {
      maxAge: "1d",
      setHeaders: (res, path) =>
        ["application/json", "text/html"].includes(mime.lookup(path)) &&
        res.setHeader("Cache-Control", "public, max-age=0"),
    }),
  );

app.get("/api/ping", (request, response) =>
  response.json({ response: "pong" }),
);

app.listen(port, () => {
  console.info(`Example server listening at http://localhost:${port}`);
});
