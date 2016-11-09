import React from 'react';
import {connect} from 'react-redux';
import NewList from './new_list';
import {requestNewSongs} from '../../../actions/lists_actions';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.popularSongs)
});

const mapDispatchToProps = dispatch => ({
  requestNewSongs: () => dispatch(requestNewSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewList);
