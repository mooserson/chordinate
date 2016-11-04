import React from 'react';
import { LogoutButton } from './logout_button';
import { hashHistory } from 'react-router';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  // componentDidUpdate() {
  //   this.redirectIfLoggedOut();
  // }
  //
  // redirectIfLoggedOut() {
  //   if (this.props.loggedIn) {
  //     hashHistory.push("/");
  //   }
  // }

  render() {
    return (
    <div className="discover">
      <h1>Discover</h1>
      <LogoutButton logout={this.props.logout} />
    </div>);
  }
}

export default Discover;
