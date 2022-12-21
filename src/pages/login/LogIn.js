import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ON_LOGIN } from '../../store/login';

import Footer from '../../UI/Footer';
import Messenger from '../../UI/Messenger';
import NavBar from '../../UI/NavBar';

import classes from './LogIn.module.css';

const Login = () => {
  //Thông tin đăng nhập
  const mailInputRef = useRef();
  const passwordInputRef = useRef();

  //Array người dùng
  const userArr = JSON.parse(localStorage.getItem('user')) || [];

  //Dispatch actions
  const dispatch = useDispatch();

  //Chuyển trang
  const navigate = useNavigate();

  //Authentication form
  const submitHandler = (event) => {
    event.preventDefault();
    const currentUser = {
      email: mailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    //Validate email
    if (!currentUser.email) {
      alert('Please enter your email!');
      return;
    }
    if (!userArr.filter((key) => key.email === currentUser.email)) {
      alert('No email found!');
      return;
    }
    //Validate password
    if (!currentUser.password) {
      alert('Please enter your password');
      return;
    }
    if (
      userArr.filter((key) => key.email === currentUser.email)[0].password !==
      currentUser.password
    ) {
      alert('Wrong password!  ');
      passwordInputRef.current.value = '';
      return;
    } else {
      localStorage.setItem(
        'currentUser',
        JSON.stringify(
          userArr.filter((user) => user.email === currentUser.email)
        )
      );
      dispatch(ON_LOGIN());
      navigate('/');
    }
  };

  return (
    <>
      <NavBar />
      <div className={classes.login}>
        <div className={classes.card}>
          <h1>Sign In</h1>
          <form>
            <input
              type='email'
              placeholder='Email'
              id='mail'
              required
              ref={mailInputRef}
            ></input>
            <input
              type='password'
              placeholder='Password'
              id='password'
              required
              ref={passwordInputRef}
            ></input>
            <button onClick={submitHandler}>SIGN IN</button>
          </form>
          <p>
            Create an account?
            <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </div>
      <Messenger />
      <Footer />
    </>
  );
};

export default Login;
