import React from 'react';

import "./styles.css";

import { useState } from "react";

import shortFilm from "./video/shortfilm.MOV";
import imageCrey from "./image/crey.jpg";

export const Background = () => {
  const [background, setBackground] = useState(false);
  
  return (
    <div className="teste">
      {background && <img src={imageCrey} alt="SeucreysonReborn"/>}
      {!background && (
        <video
          autoPlay
          muted
          className="background-video"
          onEnded={() => {
            setBackground(true);
          }}
        >
          <source src={shortFilm} type="video/mp4" />
        </video>
      )}
    </div>
  );
};
