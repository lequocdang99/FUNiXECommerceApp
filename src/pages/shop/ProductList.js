import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import classes from './ProductList.module.css';

const ProductList = () => {
  //State
  const [category, setCategory] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //Fetch sản phẩm
  const fetchCategory = async (category) => {
    try {
      const response = await fetch(
        'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
      );
      const data = await response.json();
      if (!category) {
        setCategory(data);
        setLoaded(true);
      } else {
        const result = await data.filter(
          (items) => items.category === category
        );
        setCategory(result);
        setLoaded(true);
      }
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  //Chuyển trang
  const navigate = useNavigate();

  //Function format thành tiền tệ
  const formatter = new Intl.NumberFormat();

  return (
    <>
      <div className={classes.menu}>
        <header>CATEGORIES</header>
        <div>
          <span id={classes['apple']}>APPLE</span>
          <button onClick={() => fetchCategory()}>All</button>
        </div>
        <div>
          <span>IPHONE & MAC</span>
          <button
            onClick={() => {
              fetchCategory('iphone');
            }}
          >
            Iphone
          </button>
          <button
            onClick={() => {
              fetchCategory('ipad');
            }}
          >
            Ipad
          </button>
          <button
            onClick={() => {
              fetchCategory('macbook');
            }}
          >
            Macbook
          </button>
        </div>
        <div>
          <span>WIRELESS</span>
          <button
            onClick={() => {
              fetchCategory('airpod');
            }}
          >
            Airpod
          </button>
          <button
            onClick={() => {
              fetchCategory('watch');
            }}
          >
            Watch
          </button>
        </div>
        <div>
          <span>OTHER</span>
          <button
            onClick={() => {
              fetchCategory('mouse');
            }}
          >
            Mouse
          </button>
          <button
            onClick={() => {
              fetchCategory('keyboard');
            }}
          >
            Keyboard
          </button>
          <button
            onClick={() => {
              fetchCategory('other');
            }}
          >
            Other
          </button>
        </div>
      </div>
      <div className={classes.result}>
        <div className={classes.result_filter}>
          <input placeholder='Enter Search Here!'></input>
          <select>
            <option>Default Sorting</option>
            <option>Descending</option>
            <option>Ascending</option>
          </select>
        </div>
        <div className={classes.category}>
          {loaded &&
            category.map((items) => {
              return (
                <div key={items._id.$oid} className={classes.category_products}>
                  <img
                    src={items.img1}
                    alt={items.name}
                    onClick={() => navigate(`/detail/${items._id.$oid}`)}
                  />
                  <header>{items.name}</header>
                  <p>{formatter.format(items.price)} VND</p>
                </div>
              );
            })}
        </div>
        <div className={classes.result_page}>
          <span className={classes.result_button}>
            <button>{`<<`}</button>
            {loaded && category.length > 0 && (
              <button id={classes.main}>1</button>
            )}
            <button>{`>>`}</button>
          </span>
          <p>Showing 1-9 of 9 results</p>
        </div>
      </div>
    </>
  );
};

export default ProductList;
