import React from 'react';
import NavBar from './NavBar';
import { CartProvider } from 'react-use-cart';

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <CartProvider id="products">
        <NavBar />
        {children}
      </CartProvider>
    </div>
  );
}

export default Layout;
