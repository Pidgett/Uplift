import React, { Fragment, useState, useEffect } from "react";
import placeholder from "../images/placeholder.png";

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";
const Navbar = () => {
  const [profile, setProfile] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <Fragment>
      <nav class="navbar" height="10">
        <a class="navbar-brand" href="http://localhost:3000">
          {
            <img
              src={placeholder}
              width="50"
              height="50"
              margin-top="2"
              class="d-inline-block align-top"
              alt=""
            />
          }
          <p id="brandname"> Uplift</p>
        </a>

        <div className="usrbuttons">
          <Profile />
          <LoginButton />
          <LogoutButton />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
