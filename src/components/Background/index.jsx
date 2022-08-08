import "./styles.css";

import { useState } from "react";

import shortFilm from "./video/shortfilm.MOV";
import imageCrey from "./image/crey.jpg";

export const Background = () => {
  const [background, setBackground] = useState(false);

  // document.addEventListener('visibilitychange',()=>{
  //   if (document.visibilityState === 'visible'){
  //     setTimeout(() => {

  //     }, 6000);
  //   }
  // })

  return (
    <div className="teste">
      {background && <img src={imageCrey} alt="" srcset="" />}
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
