import React, { Fragment, useState, useEffect } from "react";

const QuickSearch = () => {
  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");

  const [bname, setBName] = useState("");
  const [btype, setBType] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [business, setBusiness] = useState([]);

  /*const onSubmitSearch = () => {

    if ({ btype } === "") {
      try {
        const response = await fetch("http://localhost:5000/businesses");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      try {
        const response = await fetch("http://localhost:5000/businesses/:btype/%bname%");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
      } catch (error) {
        console.error(error.message);
      }
    

    console.log({ business })
    reut;
  };*/

  return (
    <Fragment>
      <form className="searchbar">
        <h4>Select Business Type</h4>
        <select
          className="businesstypes"
          onChange={(e) => setBType(e.target.value)}
        >
          <option value="Hotel">Hotels</option>
          <option value="Medical">Dentistry</option>
          <option value="Tourism">Optometry</option>
        </select>
        <br></br>
        Business Name
        <input type="text" onChange={(e) => setBName(e.target.value)} />
      </form>
    </Fragment>
  );
};

export default QuickSearch;
