import {
  KEY_PRESSED,
  KEY_RELEASED,
  GROUP_UPDATE
} from '../actions/keys_actions';

import { NOTE_NAMES } from '../util/tones';
import union from 'lodash/union';

const KeysReducer = (state = [], action) => {
  Object.freeze(state);
  const validKey = NOTE_NAMES.includes(action.key);
  const idx = state.indexOf(action.key);
  console.log(state)
  switch (action.type) {
    case KEY_PRESSED:
      if (validKey && idx === -1) {
        return [
          ...state,
          action.key
        ];
      }
      return state;
    case KEY_RELEASED:
      if (idx !== -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
      console.log("Key released")
      return state;
    case GROUP_UPDATE:
        return [
          action.key
        ];
      console.log("Group update")
      default:
        return state;
  }
};

export default KeysReducer;
