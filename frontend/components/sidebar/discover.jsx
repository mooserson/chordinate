import React from 'react';
import { LogoutButton } from './logout_button';

const Discover = ({logout}) => (
  <div className="discover">
    <h1>Discover</h1>
    <LogoutButton logout={logout} />
  </div>
);

export default Discover;
