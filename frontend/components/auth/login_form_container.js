import {connect} from 'react-redux';
import LoginForm from './login_form';
import {signup, login, receiveErrors} from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
