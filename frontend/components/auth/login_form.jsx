import React from 'react';
import {hashHistory} from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/home");
    }
  }

    renderErrors() {
      if (this.props.errors) {
        return (
          <span className="error-span">{this.props.errors}</span>
        );
      }
    }

  signUp(e) {
    e.preventDefault();
    this.props.clearErrors();
    hashHistory.push("/signup");
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = this.state;
  this.props.login({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleGuest(e) {
    e.preventDefault();
    const username = `guest${Math.floor(Math.random() * 10000)}`;
    this.props.signup(
      {user: {username: username, password: 'password', guest: true}}
    );
  }

  render() {
    return(
    <div className="auth-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Make Tunes Together</h2>
          <br/>
          <label htmlFor="username">Username</label>
            {this.renderErrors()}
            <br/>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
            <br/>
            <label htmlFor="password">Password</label>
              <br/>
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')} />
            <br/>
            <span className="button-span">
              <button className="submit-button">Sign In</button>
              <button className="signup-button" onClick={this.signUp}>Create Account</button>
              <button className="guest-button" onClick={this.handleGuest}>Guest Login</button>
            </span>
        </form>
    </div>
    );
  }
}

export default LoginForm;
