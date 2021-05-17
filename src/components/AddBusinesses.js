import React, { Fragment, useState, useEffect } from "react";

const AddListing = () => {
  const [name, setName] = useState("");
  const [bType, setBType] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [lift, setLift] = useState("");

  const onSubmitListing = async (e) => {
    e.preventDefault();

    //console.log(body.every(isEmpty));
    const body = { name, city, country, lift };

    window.location = "/";
  };

  return (
    <Fragment>
      <h4>Add Listing</h4>
      <form className="new">
        <div className="BusinessType">
          <label for="Business Type">Business Type</label>
          <select id="Business Type">
            <option value="">Choose One</option>
            <option value="Hotel">Hotel</option>
            <option value="Optometry">Optometry</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Museum">Museum</option>
          </select>
        </div>

        <br></br>
        <div className="newHotel">
          <label htmlFor="name" className="label">
            <input
              type="text"
              placeholder="Business Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label htmlFor="city" className="label">
            <input
              type="text"
              placeholder="City*"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </label>
          <label htmlFor="Country" className="label">
            <input
              type="text"
              placeholder="Country*"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </label>

          <label htmlFor="lift" className="label">
            <input
              type="text"
              placeholder="Lift*"
              value={lift}
              onChange={(e) => setLift(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="Submit">
          <label htmlFor="Submit" className="label">
            <button className="Submit" onClick={onSubmitListing}>
              Submit
            </button>
          </label>
        </div>
      </form>
    </Fragment>
  );
};
export default AddListing;
