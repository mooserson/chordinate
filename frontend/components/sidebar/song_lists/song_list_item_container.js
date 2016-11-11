import React from 'react';
import {connect} from 'react-redux';
import SongListItem from './song_list_item';
import {requestUserSongs} from '../../../actions/lists_actions';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  user: ownProps.user,
  title: ownProps.title,
  liked: ownProps.liked
});

const mapDispatchToProps = dispatch => ({
  requestUserSongs: user => dispatch(requestUserSongs(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListItem);
