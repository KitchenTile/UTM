import React, { useState, useEffect } from "react";
import "./Carousel.css";
import Slide1 from "../../../assets/carousel/image 40.png";
import Slide2 from "../../../assets/carousel/image 41.png";
import Slide3 from "../../../assets/carousel/image 42.png";
import Slide4 from "../../../assets/carousel/image 43.png";
import Slide5 from "../../../assets/carousel/image 44.png";
import Slide6 from "../../../assets/carousel/image 45.png";

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
    { src: Slide6, subtitle: "Caption 7" },
    { src: Slide5, subtitle: "Caption 8" },
    { src: Slide4, subtitle: "Caption 9" },
    { src: Slide3, subtitle: "Caption 10" },
    { src: Slide2, subtitle: "Caption 11" },
    { src: Slide1, subtitle: "Caption 12" },
  ],
  // Add remaining slides (13 slides total)...
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = photos.length;

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Function to handle scroll to target section
  const scrollToSection = () => {
    const section = document.getElementsByClassName("findSchoolsContainer")[0];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Autocarousel-container">
      {/* Headers */}
      <h1 className="Autoh1">Our Schools Love Us!</h1>
      <h2 className="Autoh2">We are passionate about helping children build digital skills from a school age.</h2>
      {/* Carousel Content */}
      <div className="Autocarousel">
        <div className="Autocarousel-slide">
          {photos[currentSlide].map((photo, index) => (
            <div key={index} className="Autocarousel-photo-container">
              <img
                src={photo.src}
                alt={`Slide ${currentSlide + 1} - Photo ${index + 1}`}
                className="Autocarousel-photo"
              />
              <p className="Autocarousel-subtitle">{photo.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Dots to indicate active slide */}
      <div className="Autocarousel-dots">
        {photos.map((_, index) => (
          <span
            key={index}
            className={`Autodot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      {/* Button underneath the carousel */}
      <button className="Autocarousel-btn" onClick={scrollToSection}>
        Find a school near you!
      </button>
    </div>
  );
};

export default Carousel;