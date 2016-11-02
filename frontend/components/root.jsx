import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './home';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';

import {logout} from '../actions/session_actions';
window.logout = logout;

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (window.currentUser) {
      replace("/");
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if (!window.currentUser){
      replace("/login");
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={Home}>
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/signup' component={SignupFormContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
