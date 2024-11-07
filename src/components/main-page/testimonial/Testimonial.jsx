import { useState } from 'react';
import PropTypes from 'prop-types';
import './Testimonial.css';
import slide1 from '../../../assets/testimonials/leftimg.png';
import slide2 from '../../../assets/testimonials/middleimg.png';
import slide3 from '../../../assets/testimonials/rightimg.png';

const TestimonialCard = ({ slides, className, text }) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  {/*Needs fix*/}
  const scrollToSection = () => {
    const section = document.getElementsByClassName("servicesContainer")[0];
    if (section) {
      section.scrollIntoView();
    }
};

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className={`Testimonial-card ${className}`}>
      {/* Add the text to the top half of the card */}
      <div className="Testimonial-text">
        <p>{text}</p>
      </div>

      {/* Carousel moved to the bottom */}
      <div className="carousel">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel-slide">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className="carousel-image"
          />
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

// cool, we'll be switching to use typescript instead
TestimonialCard.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
};

TestimonialCard.defaultProps = {
  className: '',
};

TestimonialCard.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Testimonial = () => {
  const slides1 = [slide1, slide1];
  const slides2 = [slide2, slide2];
  const slides3 = [slide3, slide3];

  return (
    <div className="Testimonial-container">
      <svg
        className="TestimonialSvgTopLeft"
        width="184"
        height="191"
        viewBox="0 0 184 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M163.22 137.009C161.892 130.841 156.455 117.459 145.339 113.271C131.443 108.036 122.571 115.65 109.631 110.775C96.6911 105.9 92.2729 96.6796 83.009 93.1895C65.143 86.4587 50.1529 101.173 36.9188 96.1869C12.4357 86.9632 14.8823 61.816 2.1775 57.0296C-5.76306 54.0382 -10.9102 56.6734 -13.9786 60.8067"
          stroke="#00CE94"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M171.629 104.662C170.3 98.4947 164.864 85.1123 153.747 80.9243C139.851 75.6892 130.98 83.3036 118.039 78.4286C105.099 73.5536 100.681 64.3329 91.4172 60.8428C73.5512 54.1121 58.5611 68.826 45.327 63.8402C20.8439 54.6166 23.2905 29.4693 10.5857 24.683C2.64515 21.6915 -2.50196 24.3268 -5.57042 28.4601"
          stroke="#FDBA17"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="Testimonial-title">
        What kids, parents and schools have to say about UTeachMi
      </h1>

      <div className="Testimonial-cards">
        <TestimonialCard
          slides={slides1}
          className="card-1"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
        />
        <TestimonialCard
          slides={slides2}
          className="card-2"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
        />
        <TestimonialCard
          slides={slides3}
          className="card-3"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, "
        />
      </div>

      <button className="Testimonial-button">Book a club now!</button>
      <svg
        className="TestimonialSvgBottomRight"
        width="155"
        height="103"
        viewBox="0 0 155 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.1911 68.6482L42.6522 66.0281L41.1911 68.6482ZM78.4913 69.1875L81.3165 68.1784L78.4913 69.1875ZM1.46505 84.712C0.345468 83.4906 0.42797 81.5929 1.64932 80.4734C2.87068 79.3538 4.76838 79.4363 5.88796 80.6576L1.46505 84.712ZM30.0274 97.405L29.3027 100.316L29.1055 100.267L28.9167 100.192L30.0274 97.405ZM159.252 3.13767C146.739 33.6717 132.469 59.3189 113.432 73.0247C103.821 79.9438 92.995 83.8224 80.6694 83.7523C68.3919 83.6824 54.8448 79.697 39.7299 71.2684L42.6522 66.0281C57.1642 74.1206 69.7161 77.6898 80.7035 77.7524C91.6427 77.8146 101.247 74.4036 109.926 68.1553C127.468 55.5264 141.215 31.3283 153.701 0.86233L159.252 3.13767ZM39.7299 71.2684C31.2901 66.5619 27.6384 59.7773 28.1667 53.0139C28.6792 46.4538 33.0883 40.6652 39.1674 37.7146C45.3488 34.7144 53.2956 34.5976 61.0287 39.2629C68.6928 43.8868 75.9116 53.046 81.3165 68.1784L75.6661 70.1965C70.5416 55.8491 64.0109 48.0695 57.9292 44.4004C51.9164 40.7728 46.1209 41.009 41.7873 43.1124C37.3513 45.2655 34.4727 49.3313 34.1485 53.4812C33.8402 57.4278 35.8028 62.2086 42.6522 66.0281L39.7299 71.2684ZM81.3165 68.1784C83.3681 73.9226 83.14 79.4825 80.9818 84.4037C78.8435 89.2795 74.907 93.3182 69.8737 96.3002C59.8346 102.248 45.0703 104.241 29.3027 100.316L30.7521 94.4938C45.3145 98.1188 58.3975 96.1254 66.8154 91.1381C71.0108 88.6525 73.9553 85.4865 75.487 81.9939C76.9988 78.5467 77.2298 74.5746 75.6661 70.1965L81.3165 68.1784ZM28.9167 100.192C14.3948 94.4042 6.07821 89.7445 1.46505 84.712L5.88796 80.6576C9.48568 84.5824 16.6189 88.8316 31.1381 94.6182L28.9167 100.192Z"
          fill="#5225EE"
        />
      </svg>
    </div>
  );
};

export default Testimonial;
