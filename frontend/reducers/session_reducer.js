import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState);
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;
    case LOGOUT:
      return _defaultState;
    default:
      return oldState;
  }
};

export default SessionReducer;
