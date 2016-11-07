import React from 'react';
import { buildPlaybackKeyboard } from './build_keyboard';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import { hashHistory } from 'react-router';

class PlaybackKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentDidMount() {
    $(document).on('keydown', e=> this.onKeyDown(e));
    $(document).on('keyup', e=> this.onKeyUp(e));
    const id = this.props.params.id;
    this.props.requestSong(id);
    this.redirectIfNoSong();

  }

  componentDidUpdate() {
    this.redirectIfNoSong();
  }

  componentWillUnmount() {
    $(document).off();
  }

  redirectIfNoSong() {
    if (
      this.props.currentSong.slices === undefined ||
      this.props.currentSong.slices.length < 1) {
        hashHistory.push("/home");
        console.log("redirected");
      }
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

  updateShiftKey(e) {
    let other = e.originalEvent.location === 1 ? 2 : 1;
    let $holdShift = $(`#${e.originalEvent.location}.shift-key`);
    let $otherShift = $(`#${other}.shift-key`);

    if (e.type === "keydown") {
      if ($otherShift.text() === "?") {
        $holdShift.addClass('pressed');
        $holdShift.text('Deleting...');
        $otherShift.text('Deleting...');
        this.props.deleteSong(this.props.params.id);
      } else {
        $holdShift.addClass('pressed');
        $holdShift.text('?');
        $otherShift.text('Confirm Delete');
      }
    }

    if (e.type === "keyup" && $holdShift.text() !== 'Deleting...') {
      $holdShift.removeClass('pressed');
      $holdShift.text('Delete');
      $otherShift.text('Delete');
    }
  }

  updateEnterKey(e) {
    let $enter = ('.enter-key');
    $enter.toggleClass('pressed');

    if (e.type === "keyup" && this.props.liked) {
    }

  }

  onKeyDown(e) {
    // console.log(e);
    if (e.key === " ") {
      $('.space-key').addClass('pressed');
    }

    if (e.key === "Backspace") {
      $('.backspace-key').addClass('pressed');
    }

    if (e.key === "Enter") {
      this.updateEnterKey(e);
    }

    if (e.key === "Shift") {
      this.updateShiftKey(e);
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
      hashHistory.push("/home");
    }

    if (e.key === "Enter") {
      this.updateEnterKey(e);
    }

    if (e.key === "Shift") {
      this.updateShiftKey(e);
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
        {buildPlaybackKeyboard(this.props.liked)}
      </div>
    );
  }

}

export default PlaybackKeyboard;
