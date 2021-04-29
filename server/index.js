const express = require("express");
const app = express();
const pool = require("./db");

//Middleware

app.use(express.json());

//Routes

//Search Businesses by Type

    //Optometry

    //Hotels

    //Dentistry

    //Cafes & Clubs

//Search Business by Location


//Search Businesses by Location & Type





//Search Tourism Locations by Type

    //Museums

    //National Parks

    //Beaches

    //Missions

//Add Businesses
app.post("/businesses", async (req, res) => {
    try {
        const {name, location, liftType} = req.body;
        const newBusiness = await pool.query("INSERT INTO businesses (name, location, liftType) VALUES($1, $2, $3) RETURNING *",
        [name, location, liftType]
        );

        res.json(newBusiness.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Update Businesses


//Favorite Business


//List Favorites


app.listen(3000, () => {
    console.log("Server has started on port 3000.");
});