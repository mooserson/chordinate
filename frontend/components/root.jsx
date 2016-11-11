import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { requestSong } from '../actions/current_song_actions';

import App from './app';
import HomeContainer from './home_container';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import DiscoverContainer from './sidebar/discover_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace("/home");
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace("/");
    }
  };

  const _requestNextSong = (nextState) => {
    store.dispatch(requestSong(nextState.params.id));
  };

  // const _redirectIfNoSong = (nextState, replace) => {
  //   if (
  //     store.getState().currentSong.slices === undefined ||
  //     store.getState().currentSong.slices.length < 1) {
  //       replace("/home");
  //     }
  // };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={LoginFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route
             path='/signup'
             component={SignupFormContainer}
             onEnter={_redirectIfLoggedIn} />
          <Route
            path='/home'
            component={HomeContainer}
            onEnter={_redirectIfNotLoggedIn} >
              <Route path='songs/:id' onEnter={_requestNextSong} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
