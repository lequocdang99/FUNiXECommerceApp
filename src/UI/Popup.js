import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { hidePopUp } from '../store/popup';

import classes from './Popup.module.css';

const Popup = () => {
  //State popup
  const popupItem = useSelector((state) => state.popup.items);

  //Dispatch actions của store
  const dispatch = useDispatch();

  //Tắt pop up
  const closeHandler = () => {
    dispatch(hidePopUp());
  };

  //Chuyển đến trang detail
  const navigate = useNavigate();

  return (
    <>
      <div className={classes.popup}>
        <img src={popupItem.img1} alt={popupItem.name}></img>
        <button className={classes.close} onClick={closeHandler}>
          &times;
        </button>
        <div className={classes.popup_text}>
          <h2>{popupItem.name}</h2>
          <p>{popupItem.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VND</p>
          <p>{popupItem.short_desc}</p>
          <button
            onClick={() => {
              navigate(`/detail/${popupItem._id.$oid}`);
            }}
          >
            <i className='fa fa-shopping-cart'></i>View Detail
          </button>
        </div>
      </div>
      <div className={classes.overlay}></div>
    </>
  );
};

export default Popup;
