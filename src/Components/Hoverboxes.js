import React from "react";
import "./Hoverboxes.css";
function Hoverboxes({ image, title, vid }) {
  return (
    <div className="hoverbox ">
      <img src={image} alt={title} className="hoverbox_image" />
      <video  autoPlay loop muted>
        <source
          type="video/mp4"
          src={vid}
        />
      </video>
    </div>
  );
}

export default Hoverboxes;
