import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import SignUp from './pages/login/SignUp';
import Detail from './pages/shop/Detail';
import Login from './pages/login/LogIn';
import Checkout from './pages/cart/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/detail/:productId' element={<Detail />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default App;
