import { CREATE_SONG } from '../actions/current_song_actions';

import { createSong } from '../util/current_song_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = data => console.log(data);
  switch (action.type) {
    case CREATE_SONG:
      debugger;
      break;
    default:
      return next(action);
  }
};
