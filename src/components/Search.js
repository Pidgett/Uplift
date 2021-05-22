import React, { Fragment, useState, useEffect } from "react";

const QuickSearch = () => {
  const [searchBy, setSearchBy] = useState("");

  const [param1, setParam1] = useState("");
  const [param2, setParam2] = useState("");

  return (
    <Fragment>
      <h4>Search By</h4>

      <form>
        <select name="Main Search" id="firstQuery">
          <option value="">*Select Search Filter*</option>

          <option value="bType">Business Type</option>

          <option value="country">Country</option>
        </select>

        <label htmlFor="searchbar">
          <input type="text"></input>
        </label>
      </form>
      <br></br>
    </Fragment>
  );
};

export default QuickSearch;
