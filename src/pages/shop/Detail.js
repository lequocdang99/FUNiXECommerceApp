import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { ADD_CART, UPDATE_CART } from '../../store/cart';

import Footer from '../../UI/Footer';
import Messenger from '../../UI/Messenger';
import NavBar from '../../UI/NavBar';

import classes from './Detail.module.css';

const Detail = () => {
  //ID của product
  let { productId } = useParams();

  //Chuyển trang
  const navigate = useNavigate();

  //State
  const [category, setCategory] = useState([]);
  const [related, setRelated] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(1);

  //State của cart
  const cartItemsArr = useSelector((state) => state.cart.listCart) || [];
  //Dispatch action cart
  const dispatch = useDispatch();

  //Fetch sản phẩm
  const fetchProductId = async (id) => {
    try {
      const response = await fetch(
        'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
      );
      const data = await response.json();
      const resultMain = await data.filter((items) => items._id.$oid === id);
      const resultRelated = await data.filter(
        (items) =>
          items.category === resultMain[0].category && items._id.$oid !== id
      );
      setCategory(resultMain);
      setRelated(resultRelated);
      setLoaded(true);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  useEffect(() => {
    fetchProductId(productId);
  }, [productId]);

  //Tăng số lượng sản phẩm
  const increaseHandler = (event) => {
    event.preventDefault();
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  //Giảm số lượng sản phẩm
  const decreaseHandler = (event) => {
    event.preventDefault();
    setCounter((prevState) => {
      if (counter > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  //Add to cart
  const addToCartHandler = () => {
    const item = {
      ...category[0],
      quantity: counter,
      totalPrice: category[0].price * counter,
    };

    if (
      cartItemsArr.length === 0 ||
      cartItemsArr.filter((el) => el._id === item._id).length === 0
    ) {
      dispatch(ADD_CART(item));
    } else {
      //Tìm vị trí của item trùng lặp trong state listCart
      const index = cartItemsArr.indexOf(
        cartItemsArr.filter((e) => e._id === category[0]._id)[0]
      );
      dispatch(UPDATE_CART(index, item));
    }
  };

  //Function format thành tiền tệ
  const formatter = new Intl.NumberFormat();

  return (
    <div>
      <NavBar />
      {loaded && (
        <>
          <div className={classes.product_detail}>
            <div className={classes.product_img}>
              <span className={classes.side_img}>
                <img src={category[0].img1} alt={category[0].name} />
                <img src={category[0].img2} alt={category[0].name} />
                <img src={category[0].img3} alt={category[0].name} />
                <img src={category[0].img4} alt={category[0].name} />
              </span>
              <img
                src={category[0].img4}
                alt={category[0].name}
                id={classes.main_img}
              />
            </div>
            <div className={classes.product_desc}>
              <h1>{category[0].name}</h1>
              <p id={classes.price}>
                {formatter.format(category[0].price)}
                VND
              </p>
              <p>{category[0].short_desc}</p>
              <p>
                <b>CATEGORY:</b> {category[0].category}
              </p>
              <form>
                <p>QUANTITY</p>
                <button onClick={decreaseHandler}>
                  <i className='fas fa-caret-left'></i>
                </button>
                <input
                  type='text'
                  name='quantity'
                  placeholder={counter}
                  className='qty'
                />
                <button onClick={increaseHandler}>
                  <i className='fas fa-caret-right'></i>
                </button>
              </form>
              <button onClick={addToCartHandler} id={classes.black}>
                Add to cart
              </button>
            </div>
            <div className={classes.product_feat}>
              <header id={classes.black}>DESCRIPTION</header>
              <h2>PRODUCT DESCRIPTION</h2>
              <p id={classes.list}>{category[0].long_desc}</p>
            </div>
          </div>
          <div className={classes.product_related}>
            <h2>RELATED PRODUCTS</h2>
            {loaded &&
              related.map((items) => {
                return (
                  <div key={items._id.$oid} className={classes.related_detail}>
                    <img
                      src={items.img1}
                      alt={items.name}
                      onClick={() => {
                        navigate(`/detail/${items._id.$oid}`);
                      }}
                    />
                    <header>{items.name}</header>
                    <p>
                      {items.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
                      VND
                    </p>
                  </div>
                );
              })}
          </div>
        </>
      )}
      <Messenger />
      <Footer />
    </div>
  );
};

export default Detail;
