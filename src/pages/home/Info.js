import React from 'react';

import classes from './Info.module.css';

const Info = () => {
  return (
    <>
      <div className={classes.info}>
        <span>
          <header>FREE SHIPPING</header>
          <p>Free shipping worldwide</p>
        </span>
        <span>
          <header>24 X 7 SERVICE</header>
          <p>Free shipping worldwide</p>
        </span>
        <span>
          <header>FESTIVAL OFFER</header>
          <p>Free shipping worldwide</p>
        </span>
      </div>
      <div className={classes.info_sub}>
        <span>
          <header>LET'S BE FRIENDS!</header>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </span>
        <form>
          <input placeholder='Enter your email address'></input>
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default Info;
