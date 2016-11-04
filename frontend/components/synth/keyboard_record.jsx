import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import {
  NUM_ROW_KEYS,
  TAB_ROW_KEYS,
  CAPS_ROW_KEYS,
  SHIFT_ROW_KEYS,
  FN_ROW_KEYS,
  ARROW_KEYS
} from '../../util/key_rows';
import {buildRow} from './build_row';
import Note from '../../util/note';

class KeyboardRecord extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
    }

    componentDidMount() {
      $(document).on('keydown', e=> this.onKeyDown(e));
      $(document).on('keyup', e=> this.onKeyUp(e));
    }

    onSpaceUp() {
      let $space = $('.space-key');

      if (this.props.isRecording) {
        this.props.stopRecording();
        $space.text("Start Recording");
      } else {
        this.props.startRecording();
        $space.text("Stop Recording");
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
    return (
        <div className="keyboard">
            {buildRow(NUM_ROW_KEYS, 'num')}
            {buildRow(TAB_ROW_KEYS, 'tab')}
            {buildRow(CAPS_ROW_KEYS, 'caps')}
            {buildRow(SHIFT_ROW_KEYS, 'shift')}
            {buildRow(FN_ROW_KEYS, 'fn')}
        </div>
    );
  }
}

export default KeyboardRecord;
