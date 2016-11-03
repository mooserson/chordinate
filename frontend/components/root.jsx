import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Home from './home';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import KeyboardContainer from './synth/keyboard_container';

// TODO: testing
import {logout} from '../actions/session_actions';
window.logout = logout;

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


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={LoginFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='/signup' component={SignupFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='/home' component={Home} onEnter={_redirectIfNotLoggedIn}>
            <IndexRoute component={KeyboardContainer} onEnter={_redirectIfNotLoggedIn} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path='/home/recorder' component={RecorderContainer}/>
