import React from 'react';
import {connect} from 'react-redux';
import PlayedList from './played_list';
import {requestPlayedSongs} from '../../../actions/lists_actions';

const mapStateToProps = ({lists}) => ({
  songs: Object.values(lists.playedSongs)
});

const mapDispatchToProps = dispatch => ({
  requestPlayedSongs: () => dispatch(requestPlayedSongs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayedList);
