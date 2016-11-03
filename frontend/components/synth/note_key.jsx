import React from 'react';

const NoteKey = ({note, pressed}) => {
  return (
    <span
      className={pressed ? 'note-key pressed' : 'note-key'}
      id={note}>
      {note}
      </span>
  );
};

export default NoteKey;
