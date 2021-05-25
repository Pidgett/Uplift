import React, { Fragment, useState, useEffect } from "react";

const AddListing = () => {
  const [bname, setBName] = useState("");
  const [btype, setBType] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [lift, setLift] = useState("");

  const onSubmitListing = async (e) => {
    e.preventDefault();
    try {
      const body = { bname, btype, city, country, lift };
      const response = fetch("http://localhost:5000/businesses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }

    window.location = "/";
  };

  return (
    <Fragment>
      <div className="addListing">
        <h4>Add Listing</h4>
        <br></br>
        <form>
          <p>
            <label htmlFor="businessType"> Business Type*</label>
            <select
              id="businessType"
              onChange={(e) => setBType(e.target.value)}
            >
              <option value="">Choose One</option>
              <option value="Hotel">Hotel</option>
              <option value="Medical">Medical</option>
              <option value="Tourism">Tourism</option>
            </select>
          </p>

          <br></br>
          <p>
            <label htmlFor="name" className="label">
              Business Name*
            </label>
            <input
              id="name"
              type="text"
              value={bname}
              placeholder="Business Name*"
              onChange={(e) => setBName(e.target.value)}
              required
            />
          </p>

          <br></br>
          <p>
            <label htmlFor="City" className="label">
              City*
            </label>

            <input
              id="City"
              type="text"
              value={city}
              placeholder="City*"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </p>

          <br></br>
          <p>
            <label htmlFor="Country" className="label">
              Country*
            </label>

            <input
              id="Country"
              type="text"
              value={country}
              placeholder="Country*"
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </p>

          <br></br>
          <p id="liftradio">
            <label htmlFor="Lift" className="label">
              Onsite Hoyer Lift Available?*
            </label>
            <br></br>

            <label htmlFor="true" id="liftRadio">
              True
              <input
                name="Lift"
                type="radio"
                value="true"
                onChange={(e) => setLift(e.target.value)}
              />
            </label>
            <label htmlFor="false" id="liftRadio">
              False
              <input
                name="Lift"
                type="radio"
                value="false"
                onChange={(e) => setLift(e.target.value)}
              />
            </label>
          </p>

          <br></br>

          <label htmlFor="Submit" className="label">
            <button className="Submit" onClick={onSubmitListing}>
              Submit
            </button>
          </label>
        </form>
      </div>
    </Fragment>
  );
};
export default AddListing;
