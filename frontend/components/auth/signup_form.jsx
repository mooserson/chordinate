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

  renderErrors() {
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

  render() {

    return(
    <div className="signup-form-container">
      <h2>Create New User</h2>
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
          <button>Create</button>
        </form>
        <Link className="cancel-button" to="/">Cancel</Link>
    </div>
    );
  }
}
// TODO: make link a button?


export default SignupForm;
