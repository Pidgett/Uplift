import React, { Fragment, useState, useEffect } from "react";

const QuickSearch = () => {
  const [searchBy, setSearchBy] = useState("");

  const [bType, setBType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [lift, setLift] = useState("");

  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");

  function search({ props }) {
    setSearchBy({ props });
    console.log({ searchBy });
  }

  return (
    <Fragment>
      <h4>Search By</h4>

      <form>
        <select name="Main Search" id="firstQuery">
          <option value="bType" onChange={QuickSearch}>
            Business Type
          </option>
          <option value="city" onChange={QuickSearch}>
            City
          </option>
          <option value="country" onChange={QuickSearch}>
            Country
          </option>
          <option value="location" onChange={QuickSearch}>
            Dentistry
          </option>
        </select>
      </form>
      <br></br>
    </Fragment>
  );
};

export default QuickSearch;
