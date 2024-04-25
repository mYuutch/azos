import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    console.log('Cart updated:', updatedCartItems);
  };

  const removeFromCart = (productId) => {
    console.log(productId)
    const itemIndex  = cartItems.findIndex(item => item.product.id === productId);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      setCartItems([...cartItems]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    console.log('Cart cleared');
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
