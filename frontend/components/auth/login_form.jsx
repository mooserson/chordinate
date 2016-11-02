import React from 'react';
import {Link, hashHistory} from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/Signup");
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={idx}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  signUp() {
    hashHistory.push("/Signup");
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

  render() {

    return(
    <div className="login-form-container">
      <h2>Make Tunes Together</h2>
        <br/>
        <form className="login-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label>Username
            <br/>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          <br/>
          <label>Password
            <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          </label>
          <br/>
          <button className="login-button">Sign In</button>
        </form>
        <button onClick="signup-button">Create Account</button>
        <button>Guest Login</button>
    </div>
    );
  }
}

export default LoginForm;
