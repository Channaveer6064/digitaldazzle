import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import { updateCart } from "../services/updateCart";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { user, tokenVal } = useAuth();
  const [cartData, setCartData] = useState([]);
  const getCart = async (tokenVal) => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: tokenVal,
        },
      });
      const arr = response?.data?.cart;
      setCartData(arr);
    } catch (e) {
      console.log("getcart error", e);
    }
  };
  const addToCart = async (product, tokenVal) => {
    return await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: tokenVal,
        },
      }
    );
  };
  const addItemToCart = async (product) => {
    const response = await addToCart(product, tokenVal);
    setCartData(response?.data?.cart);
  };
  const removeItem = async (id, tokenVal) => {
    return await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: tokenVal,
      },
    });
  };
  const removeItemFromCart = async (id) => {
    try {
      const response = await removeItem(id, user);
      if (response) setCartData(response?.cart);
    } catch (e) {
      console.log("remove item from cart handler", e);
    }
  };
  const updateCartValue = async (id, Action) => {
    const response = await updateCart(id, user, Action);
    setCartData(response?.data?.cart);
  };
  useEffect(() => {
    getCart();
  }, [tokenVal]);
  return (
    <CartContext.Provider
      value={{ addItemToCart, cartData, removeItemFromCart, updateCartValue }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
