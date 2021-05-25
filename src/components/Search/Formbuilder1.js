import React, { Fragment, useState, useEffect } from "react";

const SearchFilter = () => {
  const [param1, setParam1] = useState("");
  
    const 


  return(
<Fragment>
<h3>Select Filter</h3>
        <select
          name="Main Search"
          id="firstQuery"
          onChange={(e) => setParam1(e.target.value)}
        >
          <option value="">Select Filter</option>
          <option value="btype">Business Type</option>
          <option value="city">City</option>
          <option value="country">Country</option>
        </select>
        <br></br>
        <div id="second"></div>
</Fragment>
        
  )
};

export default SearchFilter;
  