import React from 'react';
import './Header.css';
import netguru from '../../images/netguru.png';
const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/nav">
            <img
              src={netguru}
              alt=""
              className=" d-inline-block w-25 align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" href="/home">
                Home
              </a>
              <a className="nav-link" href="/feature">
                Features
              </a>
              <a className="nav-link" href="/price">
                Pricing
              </a>
              <a className="nav-link disabled" href="/disabled">
                Disabled
              </a>
            </div>
          </div>
        </div>
        <hr />
      </nav>
      <div className="w-75 mx-auto">
        <h1 className="text-center fw-bold">
          Hire <span className="greenColor"> World class developer </span>
          for your application
        </h1>
        <h6 className="text-center">
          Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand.
        </h6>

        <h4 className="text-center fw-bold">
          Total Budget: <span className="text-danger">500 Million</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;
