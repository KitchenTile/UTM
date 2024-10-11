import { useState } from 'react';
import Icon from '../../../assets/footer/uteachmi.webp';
import Ofsted from '../../../assets/footer/ofsted.webp';

import './Footer.css';

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = () => {
    const email = 'info@uteachmi.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopySuccess('Email copied to clipboard!');
      })
      .catch(() => {
        setCopySuccess('Failed to copy email.');
      });
  };
  return (
    <footer>
      {/* Site map */}

      <div className="list-wrapper">
        <ul className="one">
          <ul className="bold">Site map</ul>
          <li>Tech Campus</li>
          <li>After School Club</li>
          <li>Breakfast Club</li>
          <li>FAQ</li>
          <li>Career</li>
        </ul>
        {/* Contact Us */}
        <ul className="two">
          <ul className="bold">Contact us</ul>
          <li onClick={copyToClipboard} className="underline">
            info@uteachmi.com
          </li>
          <li className="md">Tel: 0203 962 7354</li>
          <li>Location</li>
          <li>United Kingdom</li>
        </ul>
        {/* Buttons */}
        <ul className="three">
          <li>
            <button>Register</button>
          </li>
          <li>
            <button className="Footersmallerbtn">Log in</button>
          </li>
        </ul>
      </div>

      <div className="img-wrapper">
        <img src={Icon} alt="UTeachMiIcon" />
        <img src={Ofsted} alt="OfstedIcon" />
      </div>
    </footer>
  );
};

export default Footer;
