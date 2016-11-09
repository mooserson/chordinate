import {
REQUEST_NEW_SONGS,
receiveNewSongs,
REQUEST_POPULAR_SONGS,
receivePopularSongs,
REQUEST_PLAYED_SONGS,
receivePlayedSongs
} from '../actions/lists_actions';

import { fetchNewSongs,
  fetchPopularSongs,
  fetchPlayedSongs } from '../util/lists_api_util';

export default ({getState, dispatch}) => next => action => {

  const receiveNewSongsSuccessCallback = data => {
    dispatch(receiveNewSongs(data));
  };
  const receivePopularSongsSuccessCallback = data => {
    dispatch(receivePopularSongs(data));
  };
  const receivePlayedSongsSuccessCallback = data => {
    dispatch(receivePlayedSongs(data));
  };

  switch (action.type) {
    case REQUEST_NEW_SONGS:
      fetchNewSongs(receiveNewSongsSuccessCallback);
      return next(action);
    case REQUEST_POPULAR_SONGS:
      fetchPopularSongs(receiveNewSongsSuccessCallback);
      return next(action);
    case REQUEST_PLAYED_SONGS:
      fetchPlayedSongs(receivePlayedSongsSuccessCallback);
      return next(action);
    default:
      return next(action);
  }
};
