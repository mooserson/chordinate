import {
  CREATE_LIKE,
  DESTROY_LIKE,
  receiveLike } from '../actions/songs_actions';
import { createLike, destroyLike } from '../util/songs_api_util';
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
    default:
      return next(action);
  }
};
