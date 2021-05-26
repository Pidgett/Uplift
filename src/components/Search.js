import React, { Fragment, useState, useEffect, useMemo} from "react";

const QuickSearch = () => {
  
  let [bname, setBName] = useState("");
  let [btype, setBType] = useState("");
  

  let [business, setBusiness] = useState([]);

  
  


  const onSubmitSearch = async (request, response) => {

    if ( btype  === "" && bname === "") {
      try {
        const response = await fetch("http://localhost:5000/businesses");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
      } catch (error) {
        console.error(error.message);
      }
    } else if ( btype  != "" && bname === "") {
      try {
        const response = await fetch("http://localhost:5000/businesses/:btype/:bname");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
      } catch (error) {
        console.error(error.message);
      };
    }else if ( btype != "" && bname != ""){
      try {
        const response = await fetch("http://localhost:5000/businesses/:btype/:bname");
        const jsonData = await response.json();

        console.log(jsonData);
        setBusiness(jsonData);
      } catch (error) {
        console.error(error.message);
      };
      }
    

   
    
  };

 
  console.log({ business })

  return (
    
    <Fragment>
      <form className="searchbar" onSubmit={onSubmitSearch}>
        <h4>Select Business Type</h4>
        <select
          className="businesstypes"
          onChange={(e) => setBType(e.target.value)}
        >
          <option value="">Select Business Type</option>
          <option value="Hotel">Hotels</option>
          <option value="Medical">Medical</option>
          <option value="Tourism">Tourism</option>
        </select>
        <br></br>
        Business Name
        <input type="text" onChange={(e) => setBName("%"+e.target.value+"%")} />
        <br></br>
        <br></br>
        <button type="submit">Search</button>
      </form>
      <br></br>
      {" "}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Lift</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
        <td>Copacabana</td>
        <td>Rio de Janeiro</td>
        <td>Brazil</td>
        <td>True</td>
      </tr> */}
          {business.map(
            (listing) => (
              console.log(listing.id),
              (
                <tr>
                  <td>
                    <li key={listing.id} className="businessDetails">
                      <button className="details">{listing.bname}</button>
                    </li>
                  </td>
                  <td>
                    <li key={listing.id} className="businessDetails">
                      {listing.city}
                    </li>
                  </td>
                  <td>
                    <li key={listing.id} className="businessDetails">
                      {listing.country}
                    </li>
                  </td>
                  <td>
                    <li key={listing.id} className="businessDetails">
                      {listing.lift ? <h3>✓</h3> : <h3>✘</h3>}
                    </li>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default QuickSearch;
