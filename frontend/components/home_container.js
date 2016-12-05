import React from 'react';
import {connect} from 'react-redux';
import Home from './home';

const mapStateToProps = state => {
  let currentUser =
    state.session.currentUser ? state.session.currentUser.username : "";
  return({
    isSaving: Boolean(state.isSaving),
    currentUser: currentUser
  });
};

export default connect(
  mapStateToProps,
  null
)(Home);
