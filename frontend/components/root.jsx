import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './app';
import Home from './home';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import RecordKeyboardContainer from './synth/record_keyboard_container';
import DiscoverContainer from './sidebar/discover_container';
import SaveKeyboardContainer from './synth/save_keyboard_container';
import PlaybackKeyboardContainer from './synth/playback_keyboard_container';

import merge from 'lodash/merge';

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

  // const _redirectIfNoSong = (nextState, replace) => {
  //   if (
  //     store.getState().currentSong.slices === undefined ||
  //     store.getState().currentSong.slices.length < 1) {
  //       replace("/home");
  //     }
  // };

  const homeComponents = ({
    synth: RecordKeyboardContainer,
    sidebar: DiscoverContainer
  });

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={LoginFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='/signup' component={SignupFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path='/home' component={Home} onEnter={_redirectIfNotLoggedIn}>
            <IndexRoute components={homeComponents} onEnter={_redirectIfNotLoggedIn} />
          </Route>
          <Route path='/home/save' component={SaveKeyboardContainer} onEnter={_redirectIfNotLoggedIn} />
          <Route path='/home/songs/:id' component={PlaybackKeyboardContainer} onEnter={_redirectIfNotLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
