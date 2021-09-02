import React, { Fragment, useState,  useMemo} from "react";

export const QuickSearch = () => {
  
  const [bname, setBName] = useState("");
  const [btype, setBType] = useState("");
  

  const [business, setBusiness] = useState([]);
  
  


  const onSubmitSearch = async (event) => {
    event.preventDefault();

    

    if ( {btype}  === "" && {bname} === "") {
      try {
        const response = await fetch("http://localhost:5000/businesses");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
        return business;
      } catch (error) {
        console.error(error.message);
      }
    } else if ( {btype}  !== "" && {bname} === "") {
      try {
        const response = await fetch("http://localhost:5000/businesses/:btype");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
        return business;
      } catch (error) {
        console.error(error.message);
      };
    }else if ( {btype} !== "" && {bname} !== ""){
      try {
        const response = await fetch("http://localhost:5000/businesses/btype/:bname");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
        return business;
      } catch (error) {
        console.error(error.message);
      };
      }else if( {btype} === "" && {bname} !== ""){
        try{
          const response = await fetch("http://localhost:5000/businesses/:bname");
          const jsonData = await response.json();

          console.log(jsonData);
          setBusiness(jsonData);
          return business;
        } catch (error) {
          console.error(error.message);
        }

      }
      console.log("In function:", { btype })
  };

 
  console.log("Out of function:", { btype })

  export const business = useMemo(onSubmitSearch, [bname, btype]);

  return (
    
    <Fragment>
      <form className="searchbar" onSubmit={onSubmitSearch}>
        <h4>Select Business Type</h4>
        <select
          className="businesstypes"
          onChange={(e) => setBType(e.target.value)}
          value={ btype }
        >
          <option value="">Select Business Type</option>
          <option value="Hotel">Hotels</option>
          <option value="Medical">Medical</option>
          <option value="Tourism">Tourism</option>
        </select>
        <br></br>
        Business Name
        <input type="text" value ={ bname } onChange={(e) => setBName(e.target.value)} />
        <br></br>
        <br></br>
        <button type="submit" value="Submit">Search</button>
      </form>
    </Fragment>
);
  };



