import React from 'react';

const NilKey = ({val, pressed, row}) => {
  return (
    <span
      className={pressed ? 'nil-key pressed' : 'nil-key'}
      id={val}>
      {val}
      </span>
  );
};

export default NilKey;
