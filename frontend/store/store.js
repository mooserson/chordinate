import { createStore, compose } from 'redux';
import RootReducer from '../reducers/root_reducer.js';
import RootMiddleware from '../middleware/root_middleware.js';

// adds Redux dev tools if in dev env
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preLoadedState = {}) => (
  createStore(
    RootReducer,
    preLoadedState,
    composeEnhancers(RootMiddleware)
  )
);

export default configureStore;
