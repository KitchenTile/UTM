import './OurServices.css';
import ReverseTwirl from '@/assets/SVGs/ReverseTwirl.svg';
import ServicePic1 from '../../../assets/servicePictures/ServicePic1.svg';
import ServicePic2 from '../../../assets/servicePictures/ServicePic2.svg';
import ServicePic3 from '../../../assets/servicePictures/ServicePic3.svg';
import ServicePic4 from '../../../assets/servicePictures/ServicePic4.svg';

const OurServices = () => {
  const servicePictures = [ServicePic1, ServicePic2, ServicePic3, ServicePic4];

  const buttonTitles = [
    'Tech Club',
    'Breakfast Club',
    'After School Care',
    'Tech Camp',
  ];

  return (
    <div className="servicesContainer">
      <img src={ReverseTwirl} alt="ReverseTwirl" id="ReverseTwirl" />
      <div className="textPicContainer">
        <div className="mainText">
          <h1>Technology-powered Education</h1>
          <p>
            At U Teach Mi, our services have garnered rave reviews from students
            and parents alike. Experience the enthusiasm firsthand as families
            praise our engaging and educational programs, where young minds
            thrive in a creative tech environment.{' '}
          </p>
        </div>
        <div className="picturesContainer">
          {servicePictures.map((picture, index) => (
            <div className="pictureButton" key={index}>
              <img
                src={picture}
                key={index}
                id={`ServicePic${index}`}
                alt={`Service ${index}`}
              />
              <button
                /*onClick={}*/ title={buttonTitles[index]}
                id={`Button${index}`}
              >
                {buttonTitles[index]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
