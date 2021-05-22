import "./App.css";
import createAuth0Client from "@auth0/auth0-spa-js";

import Navbar from "../src/components/Navbar";
import Search from "../src/components/Search";
import ListBusinesses from "../src/components/ListBusinesses";
import AddListing from "../src/components/AddBusinesses";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="search">
        <Search />
      </div>

      <div className="listings">
        <ListBusinesses />
      </div>

      <div className="addlisting">
        <AddListing />
      </div>
    </Fragment>
  );
}

export default App;
