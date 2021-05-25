import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <button className="signupbtn">
        <a href="https://dev-f28yefd8.us.auth0.com/u/signup?state=hKFo2SBHSWluQVQwM2c0NVl0amFBSk90R19OSEtxQ3BfV1Z3bqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHVxakpqZGpsRV9DdkhyUzVCNkw1TzJjdktuZmJ2WGFyo2NpZNkgb0pQUVBBSGR6Q2NMaUozY0lqMm1HY2VHaXBVbzk2bGY">
          <strong>Sign Up</strong>
        </a>
      </button>
    );
  }
};

export default SignupButton;
