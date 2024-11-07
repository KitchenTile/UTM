import React, { useState, useEffect } from "react";
import "./Carousel.css";
import Slide1 from "../../../assets/carousel/image 40.png";
import Slide2 from "../../../assets/carousel/image 41.png";
import Slide3 from "../../../assets/carousel/image 42.png";
import Slide4 from "../../../assets/carousel/image 43.png";
import Slide5 from "../../../assets/carousel/image 44.png";
import Slide6 from "../../../assets/carousel/image 45.png";
import Slide7 from "../../../assets/carousel/image 46.png";
import Slide8 from "../../../assets/carousel/image 47.png";
import Slide9 from "../../../assets/carousel/image 48.png";

const photos = [
  [
    { src: Slide1, subtitle: "Willow Tree Primary" },
    { src: Slide2, subtitle: "St Vincent's Primary" },
    { src: Slide3, subtitle: "Lavender Primary" },
    { src: Slide4, subtitle: "Clarendon Primary" },
    { src: Slide5, subtitle: "St Adrian's Primary" },
    { src: Slide6, subtitle: "St Raphael's Primary" },
  ],
  [
    { src: Slide7, subtitle: "Cherry Tree Primary" },
    { src: Slide8, subtitle: "Merton Park Primary" },
    { src: Slide4, subtitle: "Clarendon Primary" },
    { src: Slide3, subtitle: "Lavender Primary" },
    { src: Slide2, subtitle: "St Vincent's Primary" },
  ],
];

const flattenPhotos = photos.flat();

const Carousel = () => {
  const scrollToSection = () => {
    const section = document.getElementsByClassName("findSchoolsContainer")[0];
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <div className="Autocarousel-container">
      <h1 className="Autoh1">Our Schools Love Us!</h1>
      <h2 className="Autoh2">
        We are passionate about helping children build digital skills from a school age.
      </h2>

      {/* Always render the mobile layout */}
      <div className="infinite-scroll">
        <div className="scrolling-container">
          {flattenPhotos.concat(flattenPhotos).map((photo, index) => (
            <div key={index} className="Autocarousel-photo-container">
              <img
                src={photo.src}
                alt={`Mobile Slide ${index + 1}`}
                className="Autocarousel-photo"
              />
              <p className="Autocarousel-subtitle">{photo.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="Autocarousel-btn" onClick={scrollToSection}>
        Find a school near you!
      </button>
    </div>
  );
};

export default Carousel;
