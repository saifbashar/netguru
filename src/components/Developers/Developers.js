// import all components
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Developers.css';

const Developers = () => {
  // using state
  const [developers, setDevelopers] = useState([]);
  // using effect for data load
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/saifbashar/web-dev/main/developers.JSON'
    )
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  const [selectedDeveloper, setSelectedDeveloper] = useState([]);
  // handle selected function for selected developer
  const handleSelected = (developer) => {
    const newDeveloper = [...selectedDeveloper, developer];
    setSelectedDeveloper(newDeveloper);
  };

  return (
    <div className="row mx-2">
      <div className="col-9 row gy-3">
        {/* developer component */}
        {developers.map((developer) => (
          <Developer
            developer={developer}
            selected={handleSelected}
            key={developer.key}
          ></Developer>
        ))}
      </div>
      {/* cart components */}
      <div className="col-3  margin-top">
        <Cart
          selectedDevelopers={selectedDeveloper}
          selected={handleSelected}
        ></Cart>
      </div>
    </div>
  );
};

export default Developers;
