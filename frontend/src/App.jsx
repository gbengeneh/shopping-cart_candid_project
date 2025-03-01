import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Products from './pages/products';
import Cart from './pages/cart';
import './index.css';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Products />} />  
        <Route path="/cart" element={<Cart />} /> 
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
