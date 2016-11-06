import React from 'react';

export const NilKey = ({val,row}) => {
  return (
    <span
      className='nil-key'
      id={val}>{val}
      </span>
  );
};

export const NoteKey = ({note}) => {
  return (
    <span
      className='note-key'
      id={note}>
      {note}
      </span>
  );
};

export const SpaceKey = ({mode}) => {
  return(
    <span
      className='space-key'
      id={mode.replace(/\s+/g, '-').toLowerCase()}>
      {mode}
    </span>
  );
};

export const BackspaceKey = ({mode}) => {
  return(
    <span
      className='backspace-key'
      id={mode.replace(/\s+/g, '-').toLowerCase()}>
      {mode}
    </span>
  );
};

export const EnterKey = ({mode}) => {
  return(
    <span
      className='enter-key'
      id={mode.replace(/\s+/g, '-').toLowerCase()}>
      {mode}
    </span>
  );
};
