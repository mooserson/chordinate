import {
START_LOADING_KEYBOARD,
STOP_LOADING_KEYBOARD
} from '../actions/loading_actions';

const LoadingKeyboardReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_KEYBOARD:
      return true;
    case STOP_LOADING_KEYBOARD:
      return false;
    default:
      return state;
  }
};

export default LoadingKeyboardReducer;

// changes on
// CREATE_LIKE,
// RECEIVE_LIKE,
// DESTROY_LIKE
// CREATE_SONG,
// RECEIVE_SONG
