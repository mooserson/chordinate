import React from 'react';
import { Link } from 'react-router';

export const LogoutButton = ({logout}) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
};
