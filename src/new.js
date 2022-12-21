import React from 'react';
import { useNavigate } from 'react-router';

const New = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/shop');
  };

  return (
    <div>
      <form>
        <button onClick={clickHandler}>Button</button>
      </form>
    </div>
  );
};

export default New;
