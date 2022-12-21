import React from 'react';

import NavBar from '../../UI/NavBar';
import Banner from './Banner';
import Category from './Category';
import Products from './Products';
import Info from './Info';
import Popup from '../../UI/Popup';
import Footer from '../../UI/Footer';

import classes from './Home.module.css';
import { useSelector } from 'react-redux';
import Messenger from '../../UI/Messenger';
import New from '../../new';

const Home = () => {
  //State pop up
  const popup = useSelector((state) => state.popup.popup);

  return (
    <>
      <NavBar />
      <div className={classes.home}>
        <Banner />
        <Category />
        <Products />
        <Info />
        {popup && <Popup />}
      </div>
      <Messenger />
      <Footer />
      <New />
    </>
  );
};

export default Home;
