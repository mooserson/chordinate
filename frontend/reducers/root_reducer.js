import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import KeysReducer from './keys_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  keys: KeysReducer
});

export default RootReducer;
