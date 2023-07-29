import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { tokenVal } = useAuth();

  const AddtoWishlistService = async (product, user) =>
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: tokenVal,
        },
      }
    );

  const addItemToWishlist = async (product, tokenVal) => {
    try {
      const response = await AddtoWishlistService(product, tokenVal);
      const arr = response?.data?.wishlist;
      setWishlist(arr);
    } catch (error) {
      console.log("addtowishlistHandler", error);
    }
  };

  const getWishlist = async (tokenVal) => {
    try {
      const {
        data: { wishlist },
      } = await axios.get("api/user/wishlist", {
        headers: {
          authorization: tokenVal,
        },
      });
      setWishlist(wishlist);

      return wishlist;
    } catch (error) {
      console.error("getwishlist error", error);
    }
  };
  const removeItem = async (id, tokenVal) => {
    try {
      const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: tokenVal,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const RemoveItemFromWishlist = async (id) => {
    const response = await removeItem(id, tokenVal);
    const arr = response?.data?.wishlist;
    setWishlist(arr);
  };
  useEffect(() => {
    getWishlist(tokenVal);
  }, [tokenVal]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addItemToWishlist,
        RemoveItemFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
