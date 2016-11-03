import React from 'react';
import NoteKey from './note_key';
import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';

class Keyboard extends React.Component {
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

      if (this.props.keyReleased(e.key)) {
        this.props.addNotes(this.props.keys);
      }
    }

  playNotes() {
    for(let key in this.notes) {
      if (this.props.keys.indexOf(key) >= 0) {
        this.notes[key].start();
      } else{
        this.notes[key].stop();
      }
    }
  }

  render() {
    this.playNotes();
    return (
        <div className="keyboard">
          {NOTE_NAMES.map(
            (note) => (
              < NoteKey note={note} pressed={this.props.keys.includes(note)} key={note}/>
            )
          )}
        </div>
    );
  }
}

export default Keyboard;
