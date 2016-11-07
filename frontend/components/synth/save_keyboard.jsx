import React from 'react';
import {buildSaveKeyboard} from './build_keyboard';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import {hashHistory} from 'react-router';
import SongTitleFormContainer from '../song_info/song_title_form_container';

class SaveKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentDidMount() {
    $(document).on('keydown', e=> this.onKeyDown(e));
    $(document).on('keyup', e=> this.onKeyUp(e));
  }

  componentWillUnmount() {
    $(document).off();
  }

  updateSpaceKey() {
    let space = $('.space-key');
    if (this.props.isPlaying) {
      space.attr('id', 'playing-back-recording');
      space.text('Playing...');
    } else {
      space.attr('id', 'play-back-recording');
      space.text('Play Back Recording');
    }
  }

  onKeyDown(e) {
    if (e.key === " ") {
      $('.space-key').addClass('pressed');
    }

    if (e.key === "Backspace") {
      $('.backspace-key').addClass('pressed');
    }

    if (e.key === "Enter") {
      $('.enter-key').addClass('pressed');
    }
  }

  onKeyUp(e) {
    if (e.key === " ") {
      let space = $('.space-key');
      space.removeClass('pressed');
      if (!this.props.isPlaying) {
        this.props.onPlay(this.props.currentSong);
      }
    }

    if (e.key === "Backspace") {
      $('.backspace-key').removeClass('pressed');
      this.props.stopSaving()
    }

    if (e.key === "Enter") {
      $('.enter-key').removeClass('pressed');
      this.props.createSong(this.props.currentSong, this.props.userId);

    }
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.keys.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    this.playNotes();
    this.updateSpaceKey();
    return (

      <div className='keyboard-container'>
        <SongTitleFormContainer />
        {buildSaveKeyboard()}
      </div>
    );
  }

}

export default SaveKeyboard;
