import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../../UI/Footer';
import Messenger from '../../UI/Messenger';
import NavBar from '../../UI/NavBar';

import classes from './SignUp.module.css';

const SignUp = () => {
  //Chuyển trang
  const navigate = useNavigate();

  //Thông tin người dùng
  const nameInputRef = useRef();
  const mailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();

  const userArr = JSON.parse(localStorage.getItem('user')) || [];

  //Authentication form
  const submitHandler = (event) => {
    event.preventDefault();
    const currentUser = {
      name: nameInputRef.current.value,
      email: mailInputRef.current.value,
      password: passwordInputRef.current.value,
      phone: phoneInputRef.current.value,
    };

    //Validate name
    if (userArr.length !== 0) {
      if (!currentUser.name) {
        alert('Please enter your full name!');
        return;
      }
      //Validate email
      if (!currentUser.email) {
        alert('Please enter your email!');
        return;
      }
      if (userArr.map((key) => key.email === currentUser.email) === false) {
        alert('Email must be different!');
        return;
      }
      //Validate password
      if (!currentUser.password) {
        alert('Please enter your password');
        return;
      }
      if (currentUser.password.length < 8) {
        alert('Password must have 8 or more characters!');
        return;
      }
      //Validate phone
      if (!currentUser.phone) {
        alert('Please enter your phone!');
        return;
      } else {
        userArr.push(currentUser);
        localStorage.setItem('user', JSON.stringify(userArr));
        navigate('/login');
      }
    } else {
      userArr.push(currentUser);
      localStorage.setItem('user', JSON.stringify(userArr));
      navigate('/login');
    }
  };

  return (
    <div>
      <NavBar />
      <div className={classes.signup}>
        <div className={classes.card}>
          <h1>Sign Up</h1>
          <form>
            <input
              type='name'
              placeholder='Full Name'
              id='name'
              required
              ref={nameInputRef}
            ></input>
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
            <input
              type='phone'
              placeholder='Phone'
              id='phone'
              required
              ref={phoneInputRef}
            ></input>
            <button onClick={submitHandler}>SIGN UP</button>
          </form>
          <p>
            Login?
            <Link to='/login'>Click</Link>
          </p>
        </div>
      </div>
      <Messenger />
      <Footer />
    </div>
  );
};

export default SignUp;
