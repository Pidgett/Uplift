import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="img">
        <img src={user.picture} alt={user.name} width="50" height="50" />
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
