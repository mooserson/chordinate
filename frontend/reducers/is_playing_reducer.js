import {
  START_PLAYING,
  STOP_PLAYING
} from '../actions/is_playing_actions';

const isPlayingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_PLAYING:
      return true;
    case STOP_PLAYING:
      return false;
    default:
      return state;
  }
};

export default isPlayingReducer;
