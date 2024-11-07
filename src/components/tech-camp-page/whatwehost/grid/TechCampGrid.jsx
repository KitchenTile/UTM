import React from "react";
import "./TechCampGrid.css";

const AdventurePage = () => {
  return (
    <div className="Campgrid-adventure-page">
      <h1 className="Campgrid-title">Get ready for the next Adventure!</h1>

      <div className="Campgrid-buttons-container">
        <button className="Campgrid-action-btn">Book a camp</button>
        <button className="Campgrid-action-btn">Talk to us</button>
      </div>

      <div className="Campgrid-image-grid">
        <div className="Campgrid-grid-item Campgrid-pic1">
          <button className="Campgrid-image-btn Campgrid-green">Digital Art</button>
        </div>
        <div className="Campgrid-grid-item Campgrid-pic2">
          <button className="Campgrid-image-btn Campgrid-yellow">Video Game Creation</button>
        </div>

        <div className="Campgrid-grid-item Campgrid-pic3">
          <button className="Campgrid-image-btn Campgrid-green">Robotics</button>
        </div>
        <div className="Campgrid-grid-item Campgrid-pic4">
          <button className="Campgrid-image-btn Campgrid-red">Bouncy Castle</button>
        </div>
        <div className="Campgrid-grid-item Campgrid-pic5">
          <button className="Campgrid-image-btn Campgrid-yellow">Coding</button>
        </div>
      </div>
    </div>
  );
};

export default AdventurePage;
