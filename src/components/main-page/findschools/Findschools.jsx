import { useState } from 'react';
import './Findschools.css';
import Search from './Search';

const FindSchools = () => {
  const [currentMap, setCurrentMap] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988659806!2d-0.2664031343031293!3d51.52873980506646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1728259435073!5m2!1sen!2suk'
  );

  return (
    <div className="findSchoolsContainer" id='findSchools'>
      <div className="mapInputDiv">
        <div className="mapDiv">
          <iframe
            src={currentMap}
            width="500"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="map"
          ></iframe>
        </div>
        <div className="inputDiv">
          <h1>Find schools near you!</h1>
          <Search setCurrentMap={setCurrentMap} />
        </div>
      </div>
    </div>
  );
};

export default FindSchools;
