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
          <button>Sign In</button>
        </form>
        <Link className="create-button" to="/signup">New User</Link>
        <button>Guest Login</button>
    </div>
    );
// TODO: make link a button?
  }
}

export default LoginForm;
