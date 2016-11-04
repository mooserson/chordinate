import React from 'react';
import NoteKey from './note_key';
import NilKey from './nil_key';
import {
  NOTE_NAMES,
  TONES,
  NUM_ROW_KEYS,
  TAB_ROW_KEYS,
  CAPS_ROW_KEYS,
  SHIFT_ROW_KEYS,
  FN_ROW_KEYS,
  ARROW_KEYS
} from '../../util/tones';
import Note from '../../util/note';

class KeyboardPrototype extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
    }

    componentDidMount() {
      $(document).on('keydown', e=> this.onKeyDown(e));
      $(document).on('keyup', e=> this.onKeyUp(e));
    }

    onKeyUp(e) {
      this.props.keyReleased(e.key);

      if (this.props.isRecording) {
        this.props.addNotes(this.props.keys);
      }
    }

    onKeyDown(e) {
      this.props.keyPressed(e.key);

      if (this.props.isRecording) {
        this.props.addNotes(this.props.keys);
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

  buildRow(name, keys) {
    return (
      <section className={name}>
        {keys.map((key, idx) => {
          if (NOTE_NAMES.includes(key)) {
            return (
              <NoteKey
                note={key}
                pressed={this.props.keys.includes(key)}
                key={key}/>
            )
          } else {
            return(
            <NilKey val={key} pressed={false} key={idx}/>
            )
          }
        })}
      </section>
    )
  }

  render() {
    this.playNotes();
    return (
        <div className="keyboard">
          {this.buildRow('num-row', NUM_ROW_KEYS)}
          {this.buildRow('tab-row', TAB_ROW_KEYS)}
          {this.buildRow('caps-row', CAPS_ROW_KEYS)}
          {this.buildRow('shift-row', SHIFT_ROW_KEYS)}
          {this.buildRow('fn-row', FN_ROW_KEYS)}
        </div>
    );
  }
}

export default KeyboardPrototype;
