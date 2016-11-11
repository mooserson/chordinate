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
      if (e.target.tagName !== 'INPUT') {
        this.onKeyDown(e);
      }
    });
    $(document).on('keyup', e=> {
      if (e.target.tagName !== 'INPUT') {
        this.onKeyUp(e);
      }
    });
    $(window).on('blur', () => {
      this.props.keys.forEach(key => {
        this.onKeyUp({'key': key});
      });
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
      } else {
        this.props.stopPlayback();
        this.stopNotes();
      }
    }

    if (e.key === "Backspace") {
      $('.backspace-key').removeClass('pressed');
      this.props.stopSaving();
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
