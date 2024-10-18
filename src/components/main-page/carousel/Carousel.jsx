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
    { src: Slide6, subtitle: "St Raphael's Primary" },
    { src: Slide5, subtitle: "St Adrian's Primary" },
    { src: Slide4, subtitle: "Clarendon Primary" },
    { src: Slide3, subtitle: "Lavender Primary" },
    { src: Slide2, subtitle: "St Vincent's Primary" },
    { src: Slide1, subtitle: "Willow Tree Primary" },
  ],
];


const flattenPhotos = photos.flat();

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % photos.length);
      }, 5000); 
      return () => clearInterval(interval);
    }
  }, [isMobile, currentSlide]);

 
  const scrollToSection = () => {
    const section = document.getElementsByClassName("findSchoolsContainer")[0];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Autocarousel-container">
      <h1 className="Autoh1">Our Schools Love Us!</h1>
      <h2 className="Autoh2">
        We are passionate about helping children build digital skills from a school age.
      </h2>

      
      {isMobile ? (
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
      ) : (
        
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
         
          <div className="Autocarousel-dots">
            {photos.map((_, index) => (
              <span
                key={index}
                className={`Autodot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      )}

      <button className="Autocarousel-btn" onClick={scrollToSection}>
        Find a school near you!
      </button>
    </div>
  );
};

export default Carousel;
