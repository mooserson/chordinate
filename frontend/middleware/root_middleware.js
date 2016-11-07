import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import CurrentSongMiddleware from'./current_song_middleware';
// import createLogger from 'redux-logger';
//
// const logger = createLogger();

export default applyMiddleware(
  SessionMiddleware,
  CurrentSongMiddleware
);
