// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";
import "../css/cart.css";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart (if exists, increase quantity)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          price: Number(product.price) || 0,
          quantity: 1,
        },
      ];
    });
  };

  // Remove a single product
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove all items from cart
  const removeAll = () => {
    setCartItems([]);
  };

  // Update quantity
  const updateQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart in other components
export const useCart = () => useContext(CartContext);
