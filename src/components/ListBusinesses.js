import React, { Fragment, useState, useEffect } from "react";

const ListBusinesses = () => {
  const [business, setBusiness] = useState([]);

  const getBusiness = async () => {
    try {
      const response = await fetch("http://localhost:3000/businesses");
      const jsonData = await response.json();

      console.log(jsonData);
      setBusiness(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getBusiness();
  }, []);

  console.log(business);

  return (
    <Fragment>
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
          {business.map((listing) => (
            <tr>
              <td>{listing.name}</td>
              <td>{listing.city}</td>
              <td>{listing.country}</td>
              <td>{listing.lift}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBusinesses;
