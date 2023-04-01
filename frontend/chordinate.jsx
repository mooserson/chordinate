import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import values from 'object.values';
import {polyfill} from 'keyboardevent-key-polyfill';

// polyfill safari keyboard event.key
polyfill();

// polyfill safari Object.values for 
if (!Object.values) {
  values.shim();
}

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
