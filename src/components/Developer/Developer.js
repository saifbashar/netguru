// import section

import React from 'react';
import './Developer.css';
// import ReactDOM from 'react-dom';
// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Developer = (props) => {
  // Destructuring of object
  const { name, img, skill, age, demand, country, experience } =
    props.developer;
  return (
    <div className="col-4">
      <div className="card green-border h-100">
        <img
          src={img}
          alt=""
          className="card-img-top  rounded w-75 py-2 rounded-circle d-block mx-auto"
          height="240px"
        />
        <div className="card-body">
          <h4 className="card-title green-text fw-bold">{name}</h4>
          <p>
            <span className="fw-bold">Demand: </span> {demand}$
          </p>

          <h6 className="card-text">
            <span className="fw-bold">Skill: </span>
            {skill}
          </h6>
          <h6>
            <span className="fw-bold">Country:</span> {country}
          </h6>
          <h6>
            <span className="fw-bold">Age:</span> {age}
          </h6>
          <h6>
            <span className="fw-bold">Experience:</span> {experience}
          </h6>
        </div>
        <div className="card-footer border-0 bg-white">
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                props.selected(props.developer);
              }}
              className="btn btn-outline-danger w-100"
            >
              {<FontAwesomeIcon icon={faPlus} />}
              <span> Select</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
