import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import { updateCart } from "../services/updateCart";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartData, setCartData] = useState([]);
  const getCart = async (user) => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: user.tokenVal,
        },
      });
      setCartData(response?.data?.cart);
      return response;
    } catch (e) {
      console.log("getcart error", e);
    }
  };
  const addToCart = async (product, user) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: user.tokenVal,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const addItemToCart = async (product) => {
    const response = await addToCart(product, user);
    setCartData(response?.data?.cart);
    console.log(cartData);
  };
  const removeItem = async (id, user) => {
    try {
      const { data } = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: user.tokenVal,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const removeItemFromCart = async (id) => {
    const response = await removeItem(id, user);
    if (response) setCartData(response?.cart);
  };
  const updateCartValue = async (id, Action) => {
    const updateItem = await updateCart(id, user, Action);
    if (updateItem) setCartData(updateItem.cart);
  };
  useEffect(() => {
    getCart();
  }, [user]);
  console.log(cartData);
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
