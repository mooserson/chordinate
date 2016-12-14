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
    $(document).on('keydown', e=> {
      if (e.target.tagName !== 'INPUT') { this.onKeyDown(e.key); }
    });

    $(document).on('mousedown', e=> {
      let pressedKey;
      switch(e.target.className){
        case "space-key":
          pressedKey = " ";
          break;
        case "backspace-key":
          pressedKey = "Backspace";
          break;
        case "enter-key":
          pressedKey  = "Enter";
          break;
      }
      this.onKeyDown(pressedKey);
    });

    $(document).on('keyup', e=> {
      if (e.target.tagName !== 'INPUT') {
        const pressedKey = e.key;
        this.onKeyUp(pressedKey);
      }
    });

    $(document).mouseup(() => {
      if($('.backspace-key.pressed').length === 1) {
        this.onKeyUp("Backspace");
      }
      if($('.enter-key.pressed').length === 1) {
        this.onKeyUp("Enter");
      }
      if($(".space-key.pressed").length === 1){
        this.onKeyUp(" ");
      }
    });
  }

  componentDidUpdate() {
    this.playNotes();
  }

  componentWillUnmount() {
    $(document).off();
    this.props.stopPlayback();
    this.stopNotes();
  }

  updateSpaceKey() {
    let space = $('.space-key');
    if (this.props.isPlaying) {
      space.attr('id', 'playing-back-recording');
      space.text('Stop');
    } else {
      space.attr('id', 'play-recording');
      space.text('Play Back Recording');
    }
  }

  onKeyDown(pressedKey) {
    if (pressedKey === " ") {
      $('.space-key').addClass('pressed');
    }

    if (pressedKey === "Backspace") {
      $('.backspace-key').addClass('pressed');
    }

    if (pressedKey === "Enter") {
      $('.enter-key').addClass('pressed');
    }
  }

  onKeyUp(pressedKey) {
    if (pressedKey === " ") {
      let space = $('.space-key');
      space.removeClass('pressed');
      if (!this.props.isPlaying) {
        this.props.onPlay(this.props.currentSong);
      } else {
        this.props.stopPlayback();
        this.stopNotes();
      }
    }

    if (pressedKey === "Backspace") {
      $('.backspace-key').removeClass('pressed');
      this.props.stopSaving();
    }

    if (pressedKey === "Enter") {
      $('.enter-key').removeClass('pressed').addClass('disabled');
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

  stopNotes() {
    this.notes.forEach(note => note.stop());
  }

  render() {
    this.updateSpaceKey();
    return (
      <div className="keyboard-pane-container">
        <div className='keyboard-pane'>
          <SongTitleFormContainer />
          {buildSaveKeyboard()}
        </div>
      </div>
    );
  }

}

export default SaveKeyboard;
