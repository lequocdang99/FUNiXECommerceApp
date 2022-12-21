import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopUp, showPopUp } from '../../store/popup';

import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //Fetch sản phẩm
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
      );
      const data = await response.json();
      setProducts(data);
      setLoaded(true);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //State pop up
  const popup = useSelector((state) => state.popup.popup);

  //Dispatch actions
  const dispatch = useDispatch();

  //Function format thành tiền tệ
  const formatter = new Intl.NumberFormat();

  return (
    <>
      <div className={classes.products_text}>
        <p>MADE THE HARD WAY</p>
        <h1>TOP TRENDING PRODUCTS</h1>
      </div>
      <div>
        {loaded &&
          products.map((items) => {
            return (
              <div key={items._id.$oid} className={classes.products}>
                <img
                  src={items.img1}
                  alt={items.name}
                  onClick={() => {
                    !popup ? dispatch(showPopUp(items)) : dispatch(hidePopUp());
                  }}
                />
                <header>{items.name}</header>
                <p>{formatter.format(items.price)} VND</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
