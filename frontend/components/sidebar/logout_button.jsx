import React from 'react';
import { Link } from 'react-router';

export const LogoutButton = ({logout}) => {
  const handleLogout = () => {
    window.currentUser = null;
    logout();
  };
  return (
    <Link to="/" className="logout-button" onClick={handleLogout}>Logout</Link>
  );
};
