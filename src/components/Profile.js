import { React, Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log({ user });

  return (
    isAuthenticated && (
      <Fragment>
        <div className="profImg">
          <img src={user.picture} alt={user.name} width="50" height="50" />
        </div>
        <h4 className="welcome">
          Welcome back<br></br> {user.name}!
        </h4>
      </Fragment>
    )
  );
};

export default Profile;
