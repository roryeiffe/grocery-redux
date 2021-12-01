import React from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';

const App: React.FC = () => {

  const isLoggedIn:boolean = useSelector((state:any) => state.user.isLoggedIn);
  return (
    <div>
      {isLoggedIn && <p>User Logged In</p>}
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/product/:categoryId' element = {<ProductPage/>}/>
        <Route path = '/auth' element = {<AuthPage/>}/>
        <Route path = '/cart' element = {<CartPage/>}/>
      </Routes>
    </div>
  );
}

export default App;