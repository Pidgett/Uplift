import "./App.css";
import createAuth0Client from "@auth0/auth0-spa-js";

import Navbar from "../src/components/Navbar";
import Banner from "../src/components/Banner";
import Search from "../src/components/Search";
import ListBusinesses from "../src/components/ListBusinesses";
import AddListing from "../src/components/AddBusinesses";
import { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <Fragment>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="banner">
          <Banner />
        </div>

        <div className="listings">
          <Search />
        </div>
        <div className="listings">
          <ListBusinesses />
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="listings">
          <Search />
        </div>
        <div>
          <ListBusinesses />
        </div>
        <div className="addlisting">
          <AddListing />
        </div>
      </Fragment>
    );
  }
}

export default App;
