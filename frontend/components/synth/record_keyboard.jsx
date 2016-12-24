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
      $(document).on('keydown mousedown', e=> {
          if (e.target.tagName !== 'INPUT') {
            const pressedKey = e.key || e.target.id;
            this.onKeyDown(
              pressedKey === "start-recording" ? " " : pressedKey
            );
          }
      });

      $(document).on('keyup', e=> {
          if (e.target.tagName !== 'INPUT') {
            let pressedKey = e.key;
            this.onKeyUp(pressedKey);
          }
      });
      // stop playing and release space properly when mouse is released
      $(document).mouseup(() => {
        this.props.keys.forEach(key => {
        this.onKeyUp(key);
        });
        if($(".space-key.pressed").length === 1){
          this.onKeyUp(" ");
        }
      });
      // stop playing notes when focus off window
      $(window).on('blur', () => {
        this.props.keys.forEach(key => {
          this.onKeyUp(key);
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

    onKeyDown(pressedKey) {
      this.props.keyPressed(pressedKey);

      if (this.props.isRecording) {
        this.props.addNotes(this.props.keys);
      }

      if (pressedKey === " ") {
        $('.space-key').addClass('pressed');
      }else{
        if (NOTE_NAMES.includes(pressedKey)) {
          let $key;

          if (pressedKey === ';') {
            $key = $('.caps-row span:contains(;)');
          } else {
            $key = $(`#${pressedKey}`);
          }

          $key.addClass('pressed');
        }
      }
    }

    onKeyUp(pressedKey) {
      this.props.keyReleased(pressedKey);
      if (this.props.isRecording) {
        this.props.addNotes(this.props.keys);
      }

      if (pressedKey === " ") {
        $('.space-key').removeClass('pressed');
        this.onSpaceUp();
      }else{
        if (NOTE_NAMES.includes(pressedKey)) {
          let $key;
          if (pressedKey === ';') {
            $key = $('.caps-row span:contains(;)');
          } else {
            $key = $(`#${pressedKey}`);
          }

        $key.removeClass('pressed');
        }
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
    return (
        <div className="keyboard-pane-container">
          <div className="keyboard-pane">
            <SongTitleFormContainer/>
            <h3>Welcome, use your keyboard to record a tune!</h3>
            {buildRecordKeyboard()}
          </div>
        </div>
    );
  }
}

export default RecordKeyboard;
