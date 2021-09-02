import "./App.css";

import Navbar from "../src/components/Navbar";
import Banner from "../src/components/Banner";
import Search from "../src/components/Search";
import ListBusinesses from "../src/components/ListBusinesses";
import ListBusi from "../src/components/List2";
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
        
        <div>
          <Search />
        </div>

        <div className="mk2">
          <ListBusi />
        </div>
        <div className="addlisting">
          <AddListing />
        </div>
      </Fragment>
    );
  }
}

export default App;
