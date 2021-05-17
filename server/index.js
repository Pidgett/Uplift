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
    const { name, bType, city, state, zipCode, lift } = req.body;
    const newBusiness = await pool.query(
      "INSERT INTO businesses (name, bType, city, state, zipCode, lift) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, bType, city, state, zipCode, lift]
    );

    console.log(req.body);
    res.json(newBusiness.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//Search Businesses by Type

app.get("/businesses/:bType", async (req, res) => {
  try {
    const { bType } = req.params;
    const business = await pool.query(
      "SELECT * FROM businesses WHERE bType = $1",
      [bType]
    );
    console.log(req.params);
  } catch (error) {
    console.error(error.message);
  }
});

//Update Listing

/*app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, bType, city, state, zipCode, country, lift, liftType, elevator, valet, publicTransit } = req.body;
        const updateBusiness = await pool.query(
            "UPDATE businesses SET"
        )
    } catch (error) { 
        console.error(error.message);
    }
})
*/

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
