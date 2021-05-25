import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="loginbtn" onClick={() => loginWithRedirect()}>
      <strong>Log In</strong>
    </button>
  );
};

export default LoginButton;
