import React from 'react';

import { useState } from 'react';

import classes from './Messenger.module.css';

const Messenger = () => {
  //State ẩn hiện bóng bóng chat
  const [popup, setPopup] = useState(false);

  return (
    <>
      <div className={classes.float}>
        <i
          className='fab fa-facebook-messenger'
          onClick={() => setPopup(!popup)}
        ></i>
      </div>
      {popup && (
        <section className={classes.mess}>
          <div className={classes.header}>
            <header>Customer Support</header>
            <button>Let's Chat App</button>
          </div>
          <div className={classes.chat}>
            <span className={`${classes.bubble} ${classes.sender}`}>
              Xin Chào
            </span>
            <span className={`${classes.bubble} ${classes.sender}`}>
              Làm thế nào để xem các sản phẩm
            </span>
            <span className={classes.line}>
              <img src='./img/avatar.png' alt='avatar' />
              <p className={`${classes.bubble} ${classes.admin}`}>
                ADMIN: Chào bạn
              </p>
            </span>
            <span className={classes.line}>
              <img src='./img/avatar.png' alt='avatar' />
              <p className={`${classes.bubble} ${classes.admin}`}>
                ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
              </p>
            </span>
          </div>
          <form className={classes.input}>
            <img src='./img/avatar.png' alt='avatar' />
            <input placeholder='Enter Message!' />
            <button>
              <i className='fas fa-paperclip'></i>
            </button>
            <button>
              <i className='fas fa-smile'></i>
            </button>
            <button id={classes.send}>
              <i className='fas fa-paper-plane'></i>
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Messenger;
