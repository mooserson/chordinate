import {
  CREATE_LIKE,
  DESTROY_LIKE,
  receiveLike,
  CREATE_PLAY } from '../actions/songs_actions';
import { createLike, destroyLike, createPlay } from '../util/songs_api_util';
import { hashHistory } from 'react-router';


export default ({getState, dispatch}) => next => action => {
  const receiveLikeSuccessCallback = data => {
    dispatch(receiveLike(data));
  };

  switch (action.type) {
    case CREATE_LIKE:
      let newLike = {like: {user_id: action.userId, song_id: action.songId}};
      createLike(newLike, receiveLikeSuccessCallback);
      return next(action);
    case DESTROY_LIKE:
      let oldLike = {like: {user_id: action.userId, song_id: action.songId}};
      destroyLike(oldLike, receiveLikeSuccessCallback);
      return next(action);
    case CREATE_PLAY:
      createPlay({play: {song_id: action.songId}});
      return next(action);
    default:
      return next(action);
  }
};
