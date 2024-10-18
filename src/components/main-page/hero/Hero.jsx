import './hero.css';
import Herologo from '../../../assets/SVGs/Herologo.svg';
import OrangeBlob from '../../../assets/SVGs/OrangeBlob.svg';
import MintBlob from '../../../assets/SVGs/MintBlob.svg';
import Twirl from '../../../assets/SVGs/Twirl.svg';
import ArrowTwirl from '../../../assets/SVGs/ArrowTwirl.svg';
import Desk from '../../../assets/SVGs/Desk.svg';
import Student from '../../../assets/SVGs/Student.svg';
import ExpandableSVG from './ExpandableSVG';

const Hero = () => {
  return (
    <div className="HeroDiv">
      <ExpandableSVG src={MintBlob} id="MintBlob"/>
      <ExpandableSVG src={OrangeBlob} id="OrangeBlob"/>
      <img src={Desk} alt="Desk" id="Desk" />
      <img src={Twirl} alt="Twirl" id="Twirl" />
      <img src={ArrowTwirl} alt="Twirl" id="ArrowTwirl" />
      <img src={Student} alt="Student" id="Student" />
      <div className="HeroSvgTextDiv">
        <img src={Herologo} alt="Herologo" id="Herologo" />
        <div className="textDiv">
          <h2>U Teach Mi, your trusted partner for innovative learning.</h2>
          <h2>
            Explore and join us today to empower young minds with cutting-edge
            technology education!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
