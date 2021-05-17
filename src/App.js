import "./App.css";
import ListBusinesses from "../src/components/ListBusinesses";
import AddListing from "../src/components/AddBusinesses";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">###</a>
          </li>
          <li>
            <a href="#">###</a>
          </li>
          <li>
            <a href="#">###</a>
          </li>
        </ul>
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
