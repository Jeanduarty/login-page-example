import React from 'react';

import "./styles.css";

export const Button = ({ onClick, text, id, style, disabled }) => {
  return (
    <button className="btn" id={id} onClick={onClick} style={style} disabled={disabled}>
      {text}
    </button>
  );
};
