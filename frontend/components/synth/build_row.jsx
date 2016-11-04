import React from 'react';
import { NilKey, NoteKey, SpaceKey } from './key_components';
import { NOTE_NAMES, TONES } from '../../util/tones';

export const buildRow = (notes, row, keys) => {
  return (
    <section className={`${row}-row`}>
      {notes.map((key, idx) => {
        if (NOTE_NAMES.includes(key)) {
          return (
            <NoteKey
              note={key}
              key={key}/>
          );
        } else if (key === 'Space') {
          return (
            <SpaceKey mode="Start Recording" key="space"/>
          );
        } else {
          return (
          <NilKey val={key} key={idx}/>
          );
        }
      })}
    </section>
  );
};
