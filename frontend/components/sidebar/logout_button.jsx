import React from 'react';
import {hashHistory} from 'react-router';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  componentWillReceiveProps() {
  }

  redirectIfLoggedOut() {
    if (this.props.loggedOut) {
      hashHistory.push("/");
    }
  }

  handleLogout () {
    this.props.logout();
  }

  render() {
    return (
      <button className="logout-button" onClick={this.handleLogout}>Logout</button>
    );
  }
}

export default LogoutButton;
