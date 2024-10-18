import React, { useState } from "react";
import "./hero.css";

const ExpandableSVG = ({ src, id }) => {
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });

  const handleMouseMove = (e) => {
    const image = e.target;
    const boundingBox = image.getBoundingClientRect();

    // Calculate mouse position relative to the image
    const mouseX = e.clientX - boundingBox.left;
    const mouseY = e.clientY - boundingBox.top;

    // Calculate how far the mouse is from the center of the image
    const centerX = boundingBox.width / 2;
    const centerY = boundingBox.height / 2;

    // Adjust the scale based on mouse proximity to the center
    const mouseToCenterX = Math.abs(mouseX - centerX) / centerX;
    const mouseToCenterY = Math.abs(mouseY - centerY) / centerY;

    // Set the scale and adjust position
    const scale = 1 + (1 - Math.max(mouseToCenterX, mouseToCenterY)) * 0.1;
    const translateX = (mouseX - centerX) * 0.3; 
    const translateY = (mouseY - centerY) * 0.3;

    setTransform({ x: translateX, y: translateY, scale });
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, scale: 1 }); // Reset
  };

  return (
      <img
        src={src}
        id={id}
        alt="Expandable"
        className="expandableImage"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `scale(${transform.scale}) translate(${transform.x}px, ${transform.y}px)`,
          transition: "transform 0.5s ease-out"
        }}
      />
  );
};

export default ExpandableSVG;