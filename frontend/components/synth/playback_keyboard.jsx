import React from 'react';
import { buildPlaybackKeyboard } from './build_keyboard';
import SongTitleFormContainer from '../song_info/song_title_form_container';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import { hashHistory, withRouter } from 'react-router';

class PlaybackKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentWillMount() {
    const id = this.props.params.id;
  }

  componentDidMount() {
    $(document).on('keydown', e=> {
      if (e.target.tagName !== 'INPUT') { this.onKeyDown(e); }
    });

    $('.keyboard').on('mousedown', e=> {
      let pressedKey;
      switch(e.target.classList[0]){
        case "space-key":
          pressedKey ={
            key: " "
          };
          break;
        case "backspace-key":
          pressedKey = {
            key: "Backspace"
          };
          break;
        case "enter-key":
          pressedKey  = {
            key: "Enter",
            type: "keydown"
          };
          break;
        case "shift-key":
          pressedKey = {
            key: "Shift",
            type: "keydown",
            originalEvent: {
              location: Number(e.target.id)
            }
          };
          break;
      }
      this.onKeyDown(pressedKey);
    });

    $(document).on('keyup', e=> {
        if (e.target.tagName !== 'INPUT') {
          this.onKeyUp(e);
        }
    });

    $(document).mouseup(() => {
      if($('.backspace-key.pressed').length === 1) {
        this.onKeyUp({
          key: "Backspace",
        });
      }
      if($('.enter-key.pressed').length === 1) {
        this.onKeyUp({
          key: "Enter",
          type: "keyup"
        });
      }
      if($(".space-key.pressed").length === 1){
        this.onKeyUp({
          key: " "
        });
      }
    });

    $(window).on('blur', () => {
      this.props.keys.forEach(key => {
        this.onKeyUp({'key': key});
      });
    });
  }

  componentDidUpdate() {
    this.initializeEnterKey();
    this.initializeShiftKey();
    this.disableInput();
  }

  componentWillUnmount() {
    $(document).off();
    this.props.stopPlayback();
    this.stopNotes();
  }

  initializeEnterKey() {
    let $enter = $('.enter-key');
    if (this.props.currentSong.liked) {
      $enter.addClass("liked");
      $enter.text("Unlike");
    } else {
      $enter.text("Like");
      $enter.removeClass("liked");
    }
  }

  disableInput() {
    let $input = $('.song-title-container input');
    if (this.props.currentSong.user !== this.props.username) {
      $input.attr('disabled', 'disabled');
    }
  }

  initializeShiftKey() {
    let $shifts = $('.shift-key');
    if (this.props.currentSong.user !== this.props.username) {
      $shifts.addClass('disabled');
    } else {
      $shifts.removeClass('disabled');
    }
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

  updateShiftKey(e) {
    let $holdShift = $(`#${e.originalEvent.location}.shift-key`);
    let other = e.originalEvent.location === 1 ? 2 : 1;
    let $otherShift = $(`#${other}.shift-key`);
    if (!$holdShift.hasClass('disabled')) {

      if (e.type === "keydown") {
        if ($otherShift.text() === "?") {
          $holdShift.toggleClass('pressed');
          $holdShift.text('Deleting...');
          $otherShift.text('Deleting...');
          this.props.deleteSong(this.props.params.id);
          hashHistory.push("/");
        } else if($otherShift.text() === "Confirm Delete") {
          $holdShift.toggleClass('pressed');
          $otherShift.toggleClass('confirmation');
          $holdShift.text('Delete');
          $otherShift.text('Delete');
        } else if($holdShift.hasClass("pressed")) {
          $holdShift.toggleClass('pressed');
          $otherShift.toggleClass('confirmation');
          $holdShift.text('Delete');
          $otherShift.text('Delete');
        } else {
          $holdShift.toggleClass('pressed');
          $holdShift.text('?');
          $otherShift.text('Confirm Delete');
          $otherShift.toggleClass('confirmation');
        }
      }

      if (e.type === "keyup"
          && $holdShift.text() !== 'Deleting...'
          && $holdShift.hasClass("pressed")
        ) {
        $holdShift.toggleClass('pressed');
        $otherShift.toggleClass('confirmation');
        $holdShift.text('Delete');
        $otherShift.text('Delete');
      }
    }
  }

  updateEnterKey(e) {
    let $enter = $('.enter-key');
    $enter.toggleClass('pressed');
    if (e.type === "keyup" && this.props.currentSong.liked) {
      this.props.destroyLike(
        this.props.userId,
        this.props.currentSong.id
      );
      this.initializeEnterKey();
    } else if (e.type === "keyup") {
        this.props.createLike(
          this.props.userId,
          this.props.currentSong.id
         );
        this.initializeEnterKey();
    }
  }

  onKeyDown(e) {
    if (e.key === " ") {
      $('.space-key').toggleClass('pressed');
    }

    if (e.key === "Backspace") {
      $('.backspace-key').toggleClass('pressed');
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
      space.toggleClass('pressed');
      if (!this.props.isPlaying) {
        this.props.onPlay(this.props.currentSong);
      } else {
        this.props.stopPlayback();
        this.stopNotes();
      }
    }

    if (e.key === "Backspace") {
      $('.backspace-key').toggleClass('pressed');
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

  stopNotes() {
    this.notes.forEach(note => note.stop());
  }

  render() {
    this.playNotes();
    this.updateSpaceKey();
    return (
      <div className="keyboard-pane-container">
        <div className="keyboard-pane">
          <SongTitleFormContainer/>
          {buildPlaybackKeyboard()}
        </div>
      </div>
    );
  }

}

export default withRouter(PlaybackKeyboard);
