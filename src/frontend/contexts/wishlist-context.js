import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useAuth();

  const AddtoWishlist = async (product, user) =>
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );

  const addItemToWishlist = async (product) => {
    try {
      const response = await AddtoWishlist(product, user);
      console.log(response?.data?.wishlist);
      setWishlist(response?.data?.wishlist);
      console.log(wishlist);
    } catch (error) {
      console.log("error from addtowishlist", error);
    }
  };

  const getWishlist = async (user) => {
    try {
      const {
        data: { wishlist },
      } = await axios.get("api/user/wishlist", {
        headers: {
          authorization: user.tokenVal,
        },
      });
      setWishlist(wishlist);
      console.log(wishlist);
      return wishlist;
    } catch (error) {
      console.error("getwishlist error", error);
    }
  };
  const removeItem = async (id, user) => {
    try {
      const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: user.tokenVal,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const RemoveItemFromWishlist = async (id) => {
    const response = await removeItem(id, user);
    if (response) setWishlist(response?.wishlist);
  };
  useEffect(() => {
    getWishlist(user);
  }, [user]);

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
