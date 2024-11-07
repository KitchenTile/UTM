import { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';
import UTMLogo from '../../assets/SVGs/UTM.svg';
import Ulogo from '../../assets/SVGs/Ulogo.svg';

import './header.css';
// import Facebook from "../../../assets/SVGs/Facebook.svg"
// import Instagram from "../../../assets/SVGs/Instagram.svg"
import SocialIcons from './SocialIcons';

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <header className="header">
      <Link as={Link} to={"/"}>
        <img src={UTMLogo} alt="UTMLogo" id="logoSvg" />
        <img src={Ulogo} alt="Ulogo" id="Ulogo" />
      </Link>

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <SocialIcons activeSection={activeSection} id="desktop" />
      <BurgerMenu />
    </header>
  );
};

export default Header;
