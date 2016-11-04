import React from 'react';
import NoteKey from './note_key';
import NilKey from './nil_key';
import {  NOTE_NAMES, TONES} from '../../util/tones';
import {
  NUM_ROW_KEYS,
  TAB_ROW_KEYS,
  CAPS_ROW_KEYS,
  SHIFT_ROW_KEYS,
  FN_ROW_LEFT_KEYS,
  FN_ROW_RIGHT_KEYS,
  ARROW_KEYS
} from '../../util/key_rows';
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

  buildRow(keys) {
    return (
      <span>
        {keys.map((key, idx) => {
          if (NOTE_NAMES.includes(key)) {
            return (
              <NoteKey
                note={key}
                pressed={this.props.keys.includes(key)}
                key={key}/>
            );
          } else {
            return(
            <NilKey val={key} pressed={false} key={idx}/>
            );
          }
        })}
      </span>
    );
  }

  render() {
    this.playNotes();
    return (
        <div className="keyboard live">
          <section className='num-row'>
            {this.buildRow(NUM_ROW_KEYS)}
          </section>
          <section className='tab-row'>
            {this.buildRow(TAB_ROW_KEYS)}
          </section>
          <section className='caps-row'>
            {this.buildRow(CAPS_ROW_KEYS)}
          </section>
          <section className='shift-row'>
            {this.buildRow(SHIFT_ROW_KEYS)}
          </section>
          <section className='fn-row'>
            {this.buildRow(FN_ROW_LEFT_KEYS)}
            <NilKey val="Start Recording" pressed={false} key='space' />
            {this.buildRow(FN_ROW_RIGHT_KEYS)}
          </section>
        </div>
    );
  }
}

export default KeyboardPrototype;
