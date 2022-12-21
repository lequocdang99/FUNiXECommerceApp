import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { DELETE_CART, UPDATE_CART } from '../../store/cart';

import Footer from '../../UI/Footer';
import Messenger from '../../UI/Messenger';
import NavBar from '../../UI/NavBar';

import classes from './Cart.module.css';

const Cart = () => {
  //State của cart list
  const cartList = useSelector((state) => state.cart.listCart) || [];
  //Dispatch actions
  const dispatch = useDispatch();

  //Xóa sản phẩm
  const deleteCartHandler = (item) => {
    //Tìm vị trí của item trong state listCart
    const index = cartList.indexOf(item);
    //Dispatch action xóa
    dispatch(DELETE_CART(index));
  };

  //Chuyển về trang shop
  const navigate = useNavigate();

  //Function format thành tiền tệ
  const formatter = new Intl.NumberFormat();

  //Giảm số lượng sản phẩm
  const decreaseHandler = (item) => {
    //Tìm vị trí của item trong state listCart
    const index = cartList.indexOf(item);
    //Giảm quantity
    const counter = -1;
    //Dispatch action update
    if (cartList[index].quantity > 1) {
      dispatch(UPDATE_CART([index, counter]));
    } else if (cartList[index].quantity === 1) {
      dispatch(DELETE_CART(index));
    }
  };

  //Tăng số lượng sản phẩm
  const increaseHandler = (item) => {
    //Tìm vị trí của item trong state listCart
    const index = cartList.indexOf(item);
    //Giảm quantity
    const counter = 1;
    //Dispatch action update
    dispatch(UPDATE_CART([index, counter]));
  };

  return (
    <>
      <NavBar />
      <div className={classes.cart}>
        <div className={classes.cart_banner}>
          <header>CART</header>
          <p>CART</p>
        </div>
        <h1>SHOPPING CART</h1>
        <table className={classes.cart_items}>
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((items) => {
              return (
                <tr key={items._id.$oid}>
                  <td>
                    <img
                      src={items.img1}
                      alt={items.name}
                      className={classes.cart_imgs}
                    ></img>
                  </td>
                  <td className={classes.name}>{items.name}</td>
                  <td>{formatter.format(items.price)} VND</td>
                  <td>
                    <button onClick={() => decreaseHandler(items)}>
                      <i className='fas fa-caret-left'></i>
                    </button>
                    {items.quantity}
                    <button onClick={() => increaseHandler(items)}>
                      <i className='fas fa-caret-right'></i>
                    </button>
                  </td>
                  <td>
                    {`${formatter.format(items.totalPrice)}
                    VND`}
                  </td>
                  <td>
                    <i
                      className='far fa-trash-alt'
                      onClick={() => deleteCartHandler(items)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan='6'>
                <button
                  id={classes.left}
                  onClick={() => {
                    navigate('/shop');
                  }}
                >
                  <i className='fas fa-long-arrow-alt-left'></i>
                  {} Continue shopping
                </button>
                <button
                  id={classes.right}
                  onClick={() => {
                    navigate('/checkout');
                  }}
                >
                  Proceed to checkout {}
                  <i className='fas fa-long-arrow-alt-right'></i>
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
        <div className={classes.cart_total}>
          <h2>CART TOTAL</h2>
          <h3>SUBTOTAL</h3>
          <p>
            {formatter.format(
              cartList.reduce((prev, cur) => {
                return prev + cur.totalPrice;
              }, 0)
            )}{' '}
            VND
          </p>
          <hr></hr>
          <h3>TOTAL</h3>
          <p id={classes.price_total}>
            {formatter.format(
              cartList.reduce((prev, cur) => {
                return prev + cur.totalPrice;
              }, 0)
            )}{' '}
            VND
          </p>
          <form className={classes.coupon}>
            <input placeholder='Enter your coupon'></input>
            <button>
              <i className='fas fa-gift	'></i> Apply coupon
            </button>
          </form>
        </div>
      </div>
      <Messenger />
      <Footer />
    </>
  );
};

export default Cart;
