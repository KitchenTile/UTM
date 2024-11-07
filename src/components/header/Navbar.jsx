import { Link } from 'react-router-dom';
import './Navbar.css';

// eslint-disable-next-line react/prop-types
const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = {
    services: ['Tech Club', 'Tech Camp', 'Breakfast Club', 'After School Club'],
  };

  const toggleSection = section => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <div className="navLinks">
        <div
          className={
            activeSection === 'services'
              ? 'slidingServices hovered'
              : 'slidingServices'
          }
          onMouseEnter={() => toggleSection('services')}
          onMouseLeave={() => toggleSection(null)}
        >
          <div>Our Services</div>
          <div
            className={
              activeSection === 'services' ? 'menu show' : 'menu hidden'
            }
            style={
              window.innerWidth > 1342 ?
                {
                  width:
                    activeSection === 'services'
                      ? `${145 * sections.services.length}px`
                      : '0px',
                } : {
                  width: "180px",
                  height:
                    activeSection === 'services' ?
                      "200px" : "0px",
                }
            }
            id="side"
          >
            {sections.services.map((service, index) => (
              <Link
                to={`/${service.replace(/\s/g, '-').toLowerCase()}`}
                className="link"
                key={index}
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
        <Link to={"/about-us"} id="aboutus">
          About Us
        </Link> 
        <Link to={"/account"} id="account">
          Account
        </Link>
        <Link to={"/faqs"} id="account">
          FAQs
        </Link> 
      </div>
    </>
  );
};

export default Navbar;
