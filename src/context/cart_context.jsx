import React, { useContext, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("myCompleteCart");
//   if (localCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// };
const initialState = {
  // cart: getLocalCartData(),
  // cart: getLocalCartData(),
  cart: [],
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  // to add the data in localStorage
  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    // localStorage.setItem("myCompleteCart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//custom hook
const useCartContext = () => {
  return useContext(CartContext);
};
export default CartProvider;
export { useCartContext };
