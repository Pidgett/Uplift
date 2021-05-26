const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES

//List Businesses
app.get("/businesses", async (req, res) => {
  try {
    const allBusinesses = await pool.query("SELECT * FROM businesses");
    res.json(allBusinesses.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//Add Businesses
app.post("/businesses", async (req, res) => {
  try {
    const { bname, btype, city, country, lift } = req.body;
    const newBusiness = await pool.query(
      "INSERT INTO businesses (bname, btype, city, country, lift) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [bname, btype, city, country, lift]
    );

    console.log(req.body);
    res.json(newBusiness.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//Search Businesses by Type

app.get("/businesses/:btype/:bname", async (req, res) => {
  try {
    const { btype, bname } = req.params;
    const business = await pool.query(
      "SELECT * FROM businesses WHERE btype = $1 AND WHERE bname LIKE $2",
      [btype, bname]
    );
    console.log(req.params);
  } catch (error) {
    console.error(error.message);
  }
});

//Search Businesses by City

app.get("/businesses/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const business = await pool.query(
      "SELECT * FROM businesses WHERE city = $1",
      [city]
    );
    console.log(req.params);
  } catch (error) {
    console.error(error.message);
  }
}); //Search Businesses by Country

app.get("/businesses/:country", async (req, res) => {
  try {
    const { country } = req.params;
    const business = await pool.query(
      "SELECT * FROM businesses WHERE country = $1",
      [country]
    );
    console.log(req.params);
  } catch (error) {
    console.error(error.message);
  }
}); //Search Businesses by Name

app.get("/businesses/:bName", async (req, res) => {
  try {
    const { bName } = req.params;
    const business = await pool.query(
      "SELECT * FROM businesses WHERE bName = $1",
      [bName]
    );
    console.log(req.params);
  } catch (error) {
    console.error(error.message);
  }
});

//Update Listing

app.put("/businesses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      bType,
      city,
      state,
      zipCode,
      country,
      lift,
      liftType,
      elevator,
      valet,
      publicTransit,
    } = req.body;
    const updateBusiness = await pool.query("UPDATE businesses SET");
  } catch (error) {
    console.error(error.message);
  }
});

//Delete Business
app.delete("/businesses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBusiness = await pool.query(
      "DELETE FROM businesses WHERE id = $1",
      [id]
    );
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000.");
});
