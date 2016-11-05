import React from 'react';
import {buildSaveKeyboard} from './build_keyboard';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import {hashHistory} from 'react-router';

class SaveKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentDidMount() {
    console.log('save mounted');
    if (!this.props.isPlaying) {
      $(document).on('keydown', e=> this.onKeyDown(e));
      $(document).on('keyup', e=> this.onKeyUp(e));
      $('.space-key').addClass('pressed');
    }

  }

  componentWillUnmount() {
    $(document).off();
  }

  onKeyDown(e) {
    if (e.key === " ") {
      $('.space-key').addClass('pressed');
    }

    if (e.key === "Backspace") {
      $('.backspace-key').addClass('pressed');
    }

    if (e.key === "Enter") {
      $('.backspace-key').addClass('pressed');
    }
  }

  onKeyUp(e) {
    if (e.key === " ") {
      let space = $('.space-key');
      space.removeClass('pressed');
      this.props.onPlay(this.props.currentSong);
      space.text("Playing");
      }

    if (e.key === "Backspace") {
      $('.backspace-key').removeClass('pressed');
      hashHistory.push("/home");
    }

    if (e.key === "Enter") {
      $('.backspace-key').removeClass('pressed');

    }
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.keys.indexOf(note) !== -1) {
        this.notes[idx].start();
        $(`#${note}`).addClass('pressed');
      } else {
        this.notes[idx].stop();
        $(`#${note}`).removeClass('pressed');
      }

    });
  }

  render() {
    this.playNotes();
    return (
      <div className='keyboard-container'>
        {buildSaveKeyboard()}
      </div>
    );
  }

}

export default SaveKeyboard;
