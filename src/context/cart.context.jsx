import { createContext, useEffect, useState } from 'react';

// Helper functions
const addToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(item => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const decrementFromCart = (cartItems, itemToDecrement) => {
  const item = cartItems.find(item => item.id === itemToDecrement.id);

  if (item.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToDecrement.id);
  }

  return cartItems.map(item =>
    item.id === itemToDecrement.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const removeFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter(item => item.id !== itemToRemove.id);
};

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  decrementItemFromCart: () => {},
  removeItemFromCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = itemToAdd => {
    setCartItems(addToCart(cartItems, itemToAdd));
  };

  const decrementItemFromCart = itemToDecrement => {
    setCartItems(decrementFromCart(cartItems, itemToDecrement));
  };

  const removeItemFromCart = itemToRemove => {
    setCartItems(removeFromCart(cartItems, itemToRemove));
  };

  const value = {
    cartItems,
    setCartItems,
    addItemToCart,
    decrementItemFromCart,
    removeItemFromCart,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
