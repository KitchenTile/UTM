import { useState } from 'react';
import './Search.css';
import data from '../../../mapsdata/mapsData.js';
import { PropTypes } from 'prop-types';

const SearchComponent = ({ setCurrentMap }) => {
  const [query, setQuery] = useState('');

  const filteredData = data.filter(item =>
    item.postcode.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="🔎︎ Type School Postcode..."
        className="input"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {query !== '' ? <h1 className="titles">SEARCH RESULTS</h1> : null}
      {query !== '' && filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <button onClick={() => setCurrentMap(item.src)} key={index}>
            {item.postcode} - {item.schoolName}
          </button>
        ))
      ) : query === '' ? null : (
        <div className="nrf">No results found</div>
      )}
    </>
  );
};

export default SearchComponent;

// props type checking, we would move to TypeScript later
//so we don't have to worry about using the prop-types library like this
SearchComponent.propTypes = {
  setCurrentMap: PropTypes.func,
};
