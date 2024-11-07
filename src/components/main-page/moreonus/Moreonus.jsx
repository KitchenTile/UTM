import './Moreonus.css';
import moreOnUsPicture from '../../../assets/moreOnUsPicture/moreOnUsPicture.svg';
import MoreOnUsTwirls from '../../../assets/moreOnUsPicture/MoreOnUsTwirls.svg';
import { Link } from 'react-router-dom';

const MoreOnUs = () => {
  return (
    <div className="moreOnUsContainer">
      <img src={MoreOnUsTwirls} alt="MoreOnUsTwirls" id="MoreOnUsTwirls" />
      <div className="moreOnUsText">
        <h1>More On Us</h1>
        <p>
          We host Ofsted Registered After School Technology Clubs, After School
          Care, Breakfast Clubs and thrilling Holiday Tech Camps in primary
          schools across the UK as well as new Online Learning Courses.{' '}
        </p>
        <Link as={ Link } to={"/about-us"} >
          <button title="learnMore">
            More about U Teach Mi
          </button>
        </Link>
      </div>
      <img src={moreOnUsPicture} alt="moreOnUsPicture" id="moreOnUsPicture" />
    </div>
  );
};

export default MoreOnUs;
