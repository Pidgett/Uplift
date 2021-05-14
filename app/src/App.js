import * as React from "react";

import { Fragment } from "react/cjs/react.production.min";

import * as apiClient from "./apiClient";

const App = () => {
  const [businesses, setBusinesses] = React.useState([]);

  const loadBusinesses = async () =>
    setBusinesses(await apiClient.getBusinesses());

  React.useEffect(() => {
    loadBusinesses();
  }, []);

  return (
    <main className="App">
      <BusinessList businesses={businesses} />
      <AddBusiness loadBusinesses={loadBusinesses} />
    </main>
  );
};

const BusinessList = ({ businesses }) => (
  <ul>
    {businesses.map(({ id, name, city, country, lift }) => (
      <li key={id}>
        {name}
        {city}
        {country}
        {lift}
      </li>
    ))}
  </ul>
);

const AddBusiness = ({ loadBusinesses }) => {
  const [business, setBusiness] = React.useState("");
  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [lift, setLift] = React.useState("");

  const canAdd = business !== "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (canAdd) {
      await apiClient.addBusiness(business);
      loadBusinesses();
      setBusiness("");
    }
  };

  return (
    <Fragment>
      <h4>Add Listing</h4>

      <form className="new">
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

        <div className="Submit">
          <label htmlFor="Submit" className="label">
            <button className="Submit" onClick={onSubmit}>
              Submit
            </button>
          </label>
        </div>
      </form>
    </Fragment>
  );
};

export default App;
