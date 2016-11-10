import {
REQUEST_NEW_SONGS,
receiveNewSongs,
REQUEST_POPULAR_SONGS,
receivePopularSongs,
REQUEST_PLAYED_SONGS,
receivePlayedSongs,
REQUEST_SEARCH_SONGS,
receiveSearchSongs
} from '../actions/lists_actions';

import { fetchNewSongs,
  fetchPopularSongs,
  fetchPlayedSongs,
  fetchSearchSongs } from '../util/lists_api_util';

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
      fetchPopularSongs(receivePopularSongsSuccessCallback);
      return next(action);
    case REQUEST_PLAYED_SONGS:
      fetchPlayedSongs(receivePlayedSongsSuccessCallback);
      return next(action);
    case REQUEST_SEARCH_SONGS:
      fetchSearchSongs(action.query)
    default:
      return next(action);
  }
};
