import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import LogoutButton from './logout_button';

const mapStateToProps = ({session}) => ({
  loggedOut: Boolean(!session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton);
