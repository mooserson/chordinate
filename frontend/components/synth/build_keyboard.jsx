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
  EnterKey,
  ShiftKey
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
        } else if (key === 'Backspace') {
            return (
              <BackspaceKey mode='Backspace' key="backspace" />
            );
        } else if (key === 'Enter') {
            return (
              <EnterKey mode='Enter' key='enter' />
          );
        } else if (key === 'Shift1') {
            return (
              <ShiftKey mode='Shift' id='1' key={idx} disabled/>
          );
        } else if (key === 'Shift2') {
            return (
              <ShiftKey mode='Shift' id='2' key={idx} disabled/>
          );
        } else {
            return (
              <NilKey val={key} key={idx}/>
            );
        }
      })}
    </section>
);

const buildSaveRow = (notes, row) => (
  <section className={`${row}-row`}>
    {notes.map((key, idx) => {
      if (key === 'Space') {
        return (
          <SpaceKey mode="Play Recording" key="space" />
        );
      } else if (key === 'Backspace') {
          return (
            <BackspaceKey mode='Cancel' key="backspace" />
        );
      } else if (key === 'Enter') {
          return (
            <EnterKey mode='Save' key='enter' />
        );
      } else if (key === 'Shift1') {
          return (
            <ShiftKey mode='Shift' id='1' key={idx} disabled />
        );
      } else if (key === 'Shift2') {
          return (
            <ShiftKey mode='Shift' id='2' key={idx} disabled />
        );
      } else {
          return (
            <NilKey val={key} key={idx}/>
          );
      }
    })}
  </section>
);

const buildPlaybackRow = (notes, row) => (
  <section className={`${row}-row`}>
    {notes.map((key, idx) => {
      if (key === 'Space') {
        return (
          <SpaceKey mode="Play" key={idx} />
        );
      } else if (key === 'Backspace') {
          return (
            <BackspaceKey mode='Back' key={idx} />
        );
      } else if (key === 'Enter') {
          return (
            <EnterKey mode='Like' key={idx} />
        );
      } else if (key === 'Shift1') {
          return (
            <ShiftKey mode='Delete' id='1' key={idx} />
        );
      } else if (key === 'Shift2') {
          return (
            <ShiftKey mode='Delete' id='2' key={idx} />
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

export const buildSaveKeyboard = () => (
  <div className='keyboard'>
  {buildSaveRow(NUM_ROW_KEYS, 'num')}
  {buildSaveRow(TAB_ROW_KEYS, 'tab')}
  {buildSaveRow(CAPS_ROW_KEYS, 'caps')}
  {buildSaveRow(SHIFT_ROW_KEYS, 'shift')}
  {buildSaveRow(FN_ROW_KEYS, 'fn')}
  </div>
);

export const buildPlaybackKeyboard = () => (
  <div className='keyboard'>
  {buildPlaybackRow(NUM_ROW_KEYS, 'num')}
  {buildPlaybackRow(TAB_ROW_KEYS, 'tab')}
  {buildPlaybackRow(CAPS_ROW_KEYS, 'caps')}
  {buildPlaybackRow(SHIFT_ROW_KEYS, 'shift')}
  {buildPlaybackRow(FN_ROW_KEYS, 'fn')}
  </div>
);
