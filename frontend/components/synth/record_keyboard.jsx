import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import {buildRecordKeyboard} from './build_keyboard';
import Note from '../../util/note';
import {hashHistory} from 'react-router';
import SongTitleFormContainer from '../song_info/song_title_form_container';

class RecordKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
    window.notes = this.notes;
    }

    componentWillMount() {
      this.props.removeSong();
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
      this.props.keys.forEach(key => {
        this.onKeyUp({'key': key});
      });
      this.stopNotes();
    }

    onSpaceUp() {
      let $space = $('.space-key');
      if (this.props.isRecording) {
        this.props.stopRecording();
        $space.text("Saving...");
        $space.toggleClass("recording");
      } else {
        this.props.startRecording();
        $space.text("Stop Recording");
        $space.toggleClass("recording");
      }
    }

    onKeyDown(e) {
      this.props.keyPressed(e.key);

      if (this.props.isRecording) {
        this.props.addNotes(this.props.keys);
      }

      if (e.key === " ") {
        $('.space-key').addClass('pressed');
      }else{
        if (NOTE_NAMES.includes(e.key)) {
          let $key;

          if (e.key === ';') {
            $key = $('.caps-row span:contains(;)');
          } else {
            $key = $(`#${e.key}`);
          }

          $key.addClass('pressed');
        }
      }
    }

    onKeyUp(e) {
      this.props.keyReleased(e.key);

      if (this.props.isRecording) {
        this.props.addNotes(this.props.keys);
      }

      if (e.key === " ") {
        $('.space-key').removeClass('pressed');
        this.onSpaceUp();
      }else{
        if (NOTE_NAMES.includes(e.key)) {
          let $key;
          if (e.key === ';') {
            $key = $('.caps-row span:contains(;)');
          } else {
            $key = $(`#${e.key}`);
          }

        $key.removeClass('pressed');
        }
      }
    }

  playNotes() {
    console.log(this.props.keys);
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
    return (
        <div className="keyboard-container">
          <SongTitleFormContainer/>
          {buildRecordKeyboard()}
        </div>
    );
  }
}

export default RecordKeyboard;
