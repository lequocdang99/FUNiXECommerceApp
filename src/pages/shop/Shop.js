import React from 'react';

import NavBar from '../../UI/NavBar';
import Footer from '../../UI/Footer';
import ProductList from './ProductList';
import classes from './Shop.module.css';
import Messenger from '../../UI/Messenger';

const Shop = () => {
  return (
    <>
      <NavBar />
      <div className={classes.shop}>
        <div className={classes.shop_banner}>
          <header>SHOP</header>
          <p>SHOP</p>
        </div>
        <ProductList />
      </div>
      <Messenger />
      <Footer />
    </>
  );
};

export default Shop;
