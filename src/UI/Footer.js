import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_category}>
        <h1>CUSTOMER SERVICES</h1>
        <a href='#'>Help & Contact Us</a>
        <a href='#'>Returns & Refunds</a>
        <a href='#'>Online Stores</a>
        <a href='#'>Terms & Conditions</a>
      </div>
      <div className={classes.footer_category}>
        <h1>COMPANY</h1>
        <a href='#'>What We Do</a>
        <a href='#'>Availabble Services</a>
        <a href='#'>Latest Posts</a>
        <a href='#'>FAQs</a>
      </div>
      <div className={classes.footer_category}>
        <h1>SOCIAL MEDIA</h1>
        <a href='#'>Twitter</a>
        <a href='#'>Instagram</a>
        <a href='#'>Facebook</a>
        <a href='#'>Pinterest</a>
      </div>
    </div>
  );
};

export default Footer;
