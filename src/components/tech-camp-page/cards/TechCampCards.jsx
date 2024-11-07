import React, { useState } from 'react';
import './TechCampCards.css';
import Slide1 from "../../../assets/schoolCards/image 52 (1).png";
import Slide2 from "../../../assets/schoolCards/image (5).png";
import LocationIcon from "../../../assets/schoolCards/location.png";
import ClockIcon from "../../../assets/schoolCards/Clock.png";
import PeopleIcon from "../../../assets/schoolCards/People.png";

const SchoolCards = () => {

  const cardsData = [
    { id: 1, image: Slide1, name: "St Raphael's", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 2, image: Slide2, name: "Merton Park", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 3, image: Slide1, name: "St Raphael's", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 4, image: Slide2, name: "Merton Park", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 5, image: Slide1, name: "St Raphael's", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 6, image: Slide2, name: "Merton Park", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 7, image: Slide1, name: "St Raphael's", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" },
    { id: 8, image: Slide2, name: "Merton Park", title: "Holiday Tech Camp", location: "3 Hartfield Ave, Northolt UB5 6NL", people: "32 have signed up", time: "9 AM - 4 PM" }
  ];

  const [showAll, setShowAll] = useState(false);

  // Toggle the display of all cards
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the cards to display based on the `showAll` state
  const visibleCards = showAll ? cardsData : cardsData.slice(0, 6);

  return (
    <div className="Campcard-school-cards-container">
      <h1 className="Campcard-heading">Choose a School Near you!</h1>
      <div className="Campcard-cards-row">
        {visibleCards.map((card) => (
          <div key={card.id} className="Campcard-card">
            <div className="Campcard-card-image">
              <img src={card.image} alt="School" />
            </div>
            <div className="Camp-SchoolNameWrapper">
              <h2 className="Campcard-school-name">{card.name}</h2>
              <h3 className="Camp-camp-title">{card.title}</h3>
              <div className="Campcard-card-icons">
                <div className="Campcard-icon-item">
                  <img src={LocationIcon} alt="Location" />
                  <span>{card.location}</span>
                </div>
                <div className="Campcard-icon-item">
                  <img src={PeopleIcon} alt="People" />
                  <span>{card.people}</span>
                </div>
                <div className="Campcard-icon-item">
                  <img src={ClockIcon} alt="Clock" />
                  <span>{card.time}</span>
                </div>
              </div>
            </div>
            <button className="Campcard-book-button">Book Me</button>
          </div>
        ))}
      </div>
      {cardsData.length > 6 && (
        <button className="Campcard-toggle-button" onClick={toggleShowAll}>
          {showAll ? "Show Less Options ▲" : "See More Options ▼"}
        </button>
      )}
    </div>
  );
};

export default SchoolCards;
