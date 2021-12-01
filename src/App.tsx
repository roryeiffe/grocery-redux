import React from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AuthPage from './pages/AuthPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = '/product/:categoryId' element = {<ProductPage/>}/>
        <Route path = '/auth' element = {<AuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;