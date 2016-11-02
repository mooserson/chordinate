import React from 'react';
import {Link} from 'react-router';


const Greeting = ({logout, currentUser, router}) => {
  if (currentUser) {
    return (
      <div className="greeting">
        <h2>Welcome {currentUser.username}</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className="greeting">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
};

export default Greeting;
