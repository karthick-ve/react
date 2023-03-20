import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Hi, {currentUser.username} Logged in successful!</strong> 
        </h3>
      </header>
      <p>
      </p>
    </div>
  );
};

export default Profile;