import React from 'react';
import LogoutButtonContainer from './logout_button_container';
import { hashHistory } from 'react-router';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="discover">
      <h1>Discover</h1>
      <LogoutButtonContainer />
    </div>);
  }
}

export default Discover;
