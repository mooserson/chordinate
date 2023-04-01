import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';

// adds Redux dev tools if in dev env
const composeEnhancers =
  process.env.NODE_ENV === 'development' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(RootMiddleware)
    : RootMiddleware;

const configureStore = (preLoadedState = {}) => (
  createStore(
    RootReducer,
    preLoadedState,
    composeEnhancers
  )
);

export default configureStore;
