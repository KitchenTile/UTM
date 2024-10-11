import { useState } from 'react';

import './BurgerMenu.css';
import SocialIcons from './SocialIcons';

const BurgerMenu = () => {
  const [burgerBarState, setBurgerBarState] = useState('burgerBar unclicked');
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = {
    services: ['Tech Club', 'Tech Camp', 'Breakfast Camp', 'After School Care'],
    about: ['Meet the staff', 'Our Story', 'FAQs'],
  };

  const toggleSection = section => {
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleMenu = () => {
    setBurgerBarState(
      burgerBarState === 'burgerBar unclicked'
        ? 'burgerBar clicked'
        : 'burgerBar unclicked'
    );
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="burgerMenu" onClick={toggleMenu}>
        <span className={burgerBarState} />
        <span className={burgerBarState} />
        <span className={burgerBarState} />
      </div>

      <div
        className={menuVisible ? 'menu show' : 'menu hidden'}
        id="down"
        style={{ transform: menuVisible ? 'scaleY(1)' : 'scaleY(0)' }}
      >
        <div
          className={
            activeSection === 'services'
              ? 'slidingDownContainer clicked'
              : 'slidingDownContainer'
          }
          onClick={() => toggleSection('services')}
          id="down"
        >
          <h3>Our Services</h3>
          <div
            className={
              activeSection === 'services' ? 'subMenu show' : 'subMenu hidden'
            }
            style={{
              transform:
                activeSection === 'services' ? 'scaleY(1)' : 'scaleY(0)',
            }}
            id="down"
          >
            {sections.services.map((service, index) => (
              <a
                href={`/${service.replace(/\s/g, '').toUpperCase()}`}
                className="linkDown"
                key={index}
              >
                {service}
              </a>
            ))}
          </div>
        </div>
        {/* </div> */}
        <div
          className={
            activeSection === 'about'
              ? 'slidingDownContainer clicked'
              : 'slidingDownContainer'
          }
          onClick={() => toggleSection('about')}
          id="down"
        >
          <h3>About Us</h3>
          <div
            className={
              activeSection === 'about' ? 'subMenu show' : 'subMenu hidden'
            }
            style={{
              transform: activeSection === 'about' ? 'scaleY(1)' : 'scaleY(0)',
            }}
            id="down"
          >
            {sections.about.map((item, index) => (
              <a
                href={`/${item.replace(/\s/g, '').toUpperCase()}`}
                className="linkDown"
                key={index}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <a href="/ACCOUNT" id="account">
          Account
        </a>

        <SocialIcons />
      </div>
    </>
  );
};

export default BurgerMenu;
