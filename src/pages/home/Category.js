import React from 'react';
import { useNavigate } from 'react-router';

import classes from './Category.module.css';

const Category = () => {
  //Chuyển trang shop
  const navigate = useNavigate();
  const imgHandler = () => {
    navigate('/shop');
  };

  return (
    <>
      <div className={classes.cat}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h1>BROWSE OUR CATEGORY</h1>
      </div>
      <div className={classes.cat_img}>
        <img
          src='img/product_1.png'
          alt='product_1'
          onClick={imgHandler}
          className={classes.img_top}
          id={classes.top_left}
        />
        <img
          src='img/product_2.png'
          alt='product_2'
          onClick={imgHandler}
          className={classes.img_top}
        />
        <img
          src='img/product_3.png'
          alt='product_3'
          onClick={imgHandler}
          className={classes.img_bot}
        />
        <img
          src='img/product_4.png'
          alt='product_4'
          onClick={imgHandler}
          className={classes.img_bot}
        />
        <img
          src='img/product_5.png'
          alt='product_5'
          onClick={imgHandler}
          className={classes.img_bot}
          id={classes.bot_right}
        />
      </div>
    </>
  );
};

export default Category;
