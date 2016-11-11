import {
  START_LOADING_DISCOVER,
  STOP_LOADING_DISCOVER
} from '../actions/loading_actions';

const LoadingDiscoverReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_DISCOVER:
      return true;
    case STOP_LOADING_DISCOVER:
      return false;
    default:
      return state;
  }
};

export default LoadingDiscoverReducer;
