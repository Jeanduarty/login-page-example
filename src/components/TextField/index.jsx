import React from 'react';

import "./styles.css";

export const TextField = ({type,text,onChange}) => {
  return (
    <label className="textfield-filled">
      <input type={type} placeholder=" " onChange={onChange} />
      <span>{text}</span>
    </label>
  );
};
