/* eslint-disable prefer-template */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
// {Slider}
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './lib/carousel';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const App = ({ title }) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    height: 250,
  };

  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#scandiweb">
              <span
                className="glyphicon glyphicon-home text-primary"
                aria-hidden="true"
              />{' '}
              Scandiweb
            </a>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">{title}</div>
            <div className="panel-body">
              <Carousel {...settings}>
                {data.map((ele, i) => (
                  <div className="thumbnail" key={i}>
                    <img
                      alt={ele}
                      src={
                        require(`./assets/images/${ele}.jpg`).default
                      }
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
