import React, { Fragment, useState} from "react";
import logo from "../images/logo.jpg";

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <Fragment>
        <nav className="navbar" height="10">
          <a className="navbar-brand" href="http://localhost:3000">
            {
              <img
                src={logo}
                width="50"
                height="50"
                margin-top="2"
                className="d-inline-block align-top"
                alt=""
              />
            }
          </a>
          <br></br>
          <p id="brandname"> Uplift</p>

          <div className="usrbuttons">
            <Profile />
            <LogoutButton />
          </div>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav className="navbar" height="10">
          <a className="navbar-brand" href="https://upliftt.herokuapp.com/">
            {
              <img
                src={logo}
                width="50"
                height="50"
                margin-top="2"
                className="d-inline-block align-top"
                alt=""
              />
            }
            <p id="brandname"> Uplift</p>
          </a>

          <div className="usrbuttons">
            <Profile />
            <LoginButton />
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default Navbar;
