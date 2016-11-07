import {
  STOP_RECORDING,
} from '../actions/current_song_actions';

import {
  STOP_SAVING
} from '../actions/is_saving_actions';

const isSavingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case STOP_RECORDING:
      return true;
    case STOP_SAVING:
      return false;
    default:
      return state;
  }
};

export default isSavingReducer;
