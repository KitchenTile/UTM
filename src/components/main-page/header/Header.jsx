import { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Navbar from './Navbar';
import UTMLogo from '../../../assets/SVGs/UTM.svg';
import Ulogo from '../../../assets/SVGs/Ulogo.svg';

import './header.css';
// import Facebook from "../../../assets/SVGs/Facebook.svg"
// import Instagram from "../../../assets/SVGs/Instagram.svg"
import SocialIcons from './SocialIcons';

const Header = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="header">
      <img src={UTMLogo} alt="UTMLogo" id="logoSvg" />
      <img src={Ulogo} alt="Ulogo" id="Ulogo" />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <SocialIcons activeSection={activeSection} />
      <BurgerMenu />
    </div>
  );
};

export default Header;
