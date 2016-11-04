import React from 'react';
import {
  NUM_ROW_KEYS,
  TAB_ROW_KEYS,
  CAPS_ROW_KEYS,
  SHIFT_ROW_KEYS,
  FN_ROW_KEYS,
  ARROW_KEYS
} from '../../util/key_rows';
import {
  NilKey,
  NoteKey,
  SpaceKey,
  BackspaceKey,
  EnterKey
} from './key_components';
import { NOTE_NAMES, TONES } from '../../util/tones';

const buildRecordRow = (notes, row) => (
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

export const buildRecordKeyboard = () => (
  <div className='keyboard'>
  {buildRecordRow(NUM_ROW_KEYS, 'num')}
  {buildRecordRow(TAB_ROW_KEYS, 'tab')}
  {buildRecordRow(CAPS_ROW_KEYS, 'caps')}
  {buildRecordRow(SHIFT_ROW_KEYS, 'shift')}
  {buildRecordRow(FN_ROW_KEYS, 'fn')}
  </div>
);

const buildSaveRow = (notes, row) => (
  <section className={`${row}-row`}>
    {notes.map((key, idx) => {
      if (key === 'Space') {
        return (
          <SpaceKey mode="Play Back Recording" key="space" />
        );
      } else if (key === 'Backspace') {
          return (
            <BackspaceKey mode='Delete' key="backspace" />
        );
      } else if (key === 'Enter') {
          return (
            <EnterKey mode='Save' key='enter' />
        );
      } else {
          return (
            <NilKey val={key} key={idx}/>
          );
      }
    })}
  </section>
);


export const buildSaveKeyboard = () => (
  <div className='keyboard'>
  {buildSaveRow(NUM_ROW_KEYS, 'num')}
  {buildSaveRow(TAB_ROW_KEYS, 'tab')}
  {buildSaveRow(CAPS_ROW_KEYS, 'caps')}
  {buildSaveRow(SHIFT_ROW_KEYS, 'shift')}
  {buildSaveRow(FN_ROW_KEYS, 'fn')}
  </div>
);
