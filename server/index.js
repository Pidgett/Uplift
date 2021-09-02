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

app.get("/businesses/:btype", async (req, res) => {

  try {
    const {btype} = req.params;

    const businessesType = await pool.query(
      "SELECT * FROM businesses WHERE businesses_btype = $1",
      [btype]
    );
    res.json(businessesType.rows[0]);
    console.log("Business Type:",req.params);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/businesses/btype/:bname", async (req, res) => {
  try {
    const { btype, bname } = req.params.bname;
    const businessesTypeName = await pool.query(
      "SELECT * FROM businesses WHERE businesses_btype = $1 AND WHERE businesses_bname LIKE $2",
      [btype, bname]
    );
    res.json(businessesTypeName.rows);

    console.log("Business Type and Name:", req.params);
  } catch (error) {
    console.error(error.message);
  }
});

//Search Businesses by City

app.get("/businesses/:city", async (req, res) => {
  try {
    const { city } = req.params.city;
    const businessesCity = await pool.query(
      "SELECT * FROM businesses WHERE businesses_city = $1",
      [city]
    );
    res.json(businessesCity.rows);

    console.log("City:", req.params);
  } catch (error) {
    console.error(error.message);
  }
}); //Search Businesses by Country

app.get("/businesses/:country", async (req, res) => {
  try {
    const { country } = req.params.country;
    const businessesCountry = await pool.query(
      "SELECT * FROM businesses WHERE businesses_country = $1",
      [country]
    );
    res.json(businessesCountry.rows);

    console.log("Country:", req.params);
  } catch (error) {
    console.error(error.message);
  }
}); //Search Businesses by Name

app.get("/businesses/:bname", async (req, res) => {
  try {
    const { bname } = req.params.bname;
    const businessesName = await pool.query(
      "SELECT * FROM businesses WHERE businesses_bname LIKE $1",
      [bname]
    );
    res.json(businessesName.rows);

    console.log("Business Name:", req.params);
  } catch (error) {
    console.error(error.message);
  }
});

//Update Listing

app.put("/businesses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      bname,
      btype,
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
