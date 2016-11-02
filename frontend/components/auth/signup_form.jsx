import React from 'react';
import {Link, hashHistory} from 'react-router';

class SignupForm extends React.Component {
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
      hashHistory.push("/");
    }
  }

  renderErrors(field) {
    if (this.props.errors) {
      return (
        <ul className={`error-list`}>
          <li>{this.props.errors[field]}</li>
        </ul>
      );
    }
  }

  handleSubmit(e) {
  e.preventDefault();
  const user = this.state;
  this.props.signup({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  cancel(e) {
    e.preventDefault;
    hashHistory.push("/");
  }

  render() {
    return(
    <div className="auth-form-container">
      <h2>Create New User</h2>
        <br/>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
            {this.renderErrors('username')}
            <br/>
            <input
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
            <br/>
          <label htmlFor="password">Password</label>
            {this.renderErrors('password')}
            <br/>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')} />
          <br/>
          <button className="submit-button">Create</button>
          <button className="cancel-button" onClick={this.cancel}>Cancel</button>
        </form>
    </div>
    );
  }
}
// TODO: make link a button?


export default SignupForm;
