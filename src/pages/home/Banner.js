import React from 'react';
import { useNavigate } from 'react-router';

import classes from './Banner.module.css';

const Banner = () => {
  //Chuyển sang shop
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/shop');
  };

  return (
    <div className={classes.banner}>
      <div className={classes.banner_text}>
        <p>NEW INSPIRATION 2020 </p>
        <h1>
          20% OFF ON NEW <br></br>SEASON
        </h1>
        <button onClick={buttonHandler}>Browse collections</button>
      </div>
      <img src='img/banner1.jpg' alt='banner' />
    </div>
  );
};

export default Banner;
