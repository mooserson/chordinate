import React from 'react';
import {connect} from 'react-redux';
import Discover from './discover';
import {logout} from '../../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Discover);
