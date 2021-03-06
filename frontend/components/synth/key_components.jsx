import React from 'react';

export const NilKey = ({val,row, className = 'nil-key'}) => {
  return (
    <span
      className={className}
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

export const BackspaceKey = ({mode, disabled}) => {
  return(
    <span
      className={disabled ? 'backspace-key disabled' : 'backspace-key'}
      id={mode.replace(/\s+/g, '-').toLowerCase()}>
      {mode}
    </span>
  );
};

export const EnterKey = ({mode, disabled}) => {
  return(
    <span
      className={disabled ? 'enter-key disabled' : 'enter-key'}
      id={mode.replace(/\s+/g, '-').toLowerCase()}>
      {mode}
    </span>
  );
};

export const ShiftKey = ({mode, id, disabled}) => {
  return(
    <span
      className={disabled ? `shift-key disabled` : 'shift-key'}
      id={id}>
      {mode}
    </span>
  );
};
