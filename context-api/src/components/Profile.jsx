import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if(!user) return <h1>Please login first</h1>
  return <div>Profile : {user.UserName}</div>;
};

export default Profile;
