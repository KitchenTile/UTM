import './Camphero.css';

import Twirl from '../../../assets/SVGs/Twirl.svg';
import ArrowTwirl from '../../../assets/SVGs/ArrowTwirl.svg';
import ExpandableSVG from '../../main-page/hero/ExpandableSVG';




const Camphero = ({ page, leftBlob, rightBlob, logo, button, text }) => {
  return (
    <div className="HeroDiv" id={page}>
      <ExpandableSVG src={leftBlob} id={page}/>
      <ExpandableSVG src={rightBlob} id="OrangeBlob"/>
      <img src={Twirl} alt="Twirl" id="Twirl" />
      <img src={ArrowTwirl} alt="Twirl" id="ArrowTwirl" />
      <div className="HeroSvgTextDiv" id={page === "ASChero" ? "ASChero" : 'TChero'}>
        <img src={logo} alt="techCampLogo" id="techCampLogo" />
        <div className="textDiv">
          <h2>{ text }</h2>
        </div>
        {button ? <button>{button}</button> : null}
      </div>
    </div>
  );
};

export default Camphero;