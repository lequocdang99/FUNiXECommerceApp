import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ON_LOGOUT } from '../store/login';

import classes from './NavBar.module.css';

const NavBar = () => {
  //Hook chuyển trang
  const navigate = useNavigate();

  //State người dùng login
  const logIn = useSelector((state) => state.login.login);
  //Dispatch logout actions
  const dispatch = useDispatch();

  //Chuyển trang
  const pageHandler = (page) => {
    navigate(`/${page}`);
  };

  //Log out người dùng
  const logOutHandler = () => {
    dispatch(ON_LOGOUT());
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  //Thông tin người đăng nhập
  const currentUserInfo = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className={classes.navBar}>
      <button className={classes.btn_left} onClick={() => pageHandler('')}>
        Home
      </button>
      <button className={classes.btn_left} onClick={() => pageHandler('shop')}>
        Shop
      </button>
      <header onClick={() => pageHandler('')}>BOUTIQUE</header>
      {logIn && (
        <button
          className={classes.btn_right}
          id={classes.logout}
          onClick={logOutHandler}
        >
          (Log Out)
        </button>
      )}
      <button
        className={classes.btn_right}
        onClick={() => pageHandler('signup')}
      >
        <i className='fas fa-user-alt'></i>
        {!logIn ? (
          'Login'
        ) : (
          <>
            {currentUserInfo[0].name}
            <i className='fas fa-caret-down'></i>
          </>
        )}
      </button>
      <button className={classes.btn_right} onClick={() => pageHandler('cart')}>
        <i className='fas fa-dolly-flatbed'></i>
        Cart
      </button>
    </div>
  );
};

export default NavBar;
