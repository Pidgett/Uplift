import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="logoutbtn"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <strong>Log Out</strong>
    </button>
  );
};

export default LogoutButton;
