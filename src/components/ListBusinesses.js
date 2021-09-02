import React, { Fragment, useState, useMemo } from "react";
const ListBusinesses = () => {
  const [business, setBusiness] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [bname, setBName] = useState("");
  const [btype, setBType] = useState("");

  const getBusinesses = async (request, response) => {
    try {
      const response = await fetch("http://localhost:5000/businesses");
      const jsonData = await response.json();

      console.log(jsonData);
      setBusiness(jsonData);

    } catch (error) {
      console.error(error.message);
    }
  };
  useMemo(() => {
    getBusinesses();
  }, []);

  console.log(business);

  const onSubmitSearch = (btype, bname) => {
      let filteredBusinesses = [];
      let nameQuery = new RegExp('"'+{bname}+'"');

    if ( btype  === "" && bname === "") {
      filteredBusinesses = business;

    } else if ( btype  !== "" && bname === "") {
      for(let i = 0; i < business.length; i++){
        if(btype === business[i][btype]){
          filteredBusinesses.push(business[i]);
        }
      }

      } else if ( btype !== "" && bname !== ""){
          for(let i = 0; i < business.length; i++){
            if(btype === business[i][btype] && business[i][bname].test(nameQuery)){
                filteredBusinesses.push(business[i]);
            }
          }
      } else if ( btype === "" && bname !== ""){
        for(let i = 0; i < business.length; i++){
          if(business[i][bname].test(nameQuery)){
            filteredBusinesses.push(business[i]);
          }
        }
      }
      setFiltered(filteredBusinesses)
  };

  useMemo(() => {
    onSubmitSearch();
  }, []);

if (filtered === []){
 

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
} else {


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
        {filtered.map(
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

}


  
};

export default ListBusinesses;
