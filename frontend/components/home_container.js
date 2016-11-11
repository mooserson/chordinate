import React from 'react';
import {connect} from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  isSaving: Boolean(state.isSaving)
});

export default connect(
  mapStateToProps,
  null
)(Home);
