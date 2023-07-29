import React from "react";
import "./Card.css";
import { ToastContainer, toast } from "react-toastify";
import { TiStar } from "react-icons/ti";
import { useWishlist } from "../../contexts/wishlist-context";
import { useAuth } from "../../contexts/auth-context";
import { useCart } from "../../contexts/cart-context";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { styled } from "@mui/material";
const Card = ({ items }) => {
  // console.log(props);
  const navigator = useNavigate();
  const { tokenVal, user } = useAuth();
  const { addItemToCart, cartData, removeItemFromCart } = useCart();
  // console.log(`${items}`);
  const { addItemToWishlist, wishlist, RemoveItemFromWishlist } = useWishlist();
  return (
    <div className="card">
      <div className="card-container">
        <img src={items.image} alt={items.altText} className="card-img" />
        <div className="wishlist-badge"></div>
        <div className="card-content">
          <p className="card-name">{items.name}</p>
          <p className="rating">
            <span>
              {items.rating}
              <span>
                <TiStar />
              </span>
            </span>
          </p>
        </div>
        <div className="price">${items.price}</div>

        {!wishlist?.find((product) => product._id === items._id) ? (
          <button
            className="card-btn"
            onClick={() => {
              if (user.isUserLoggedIn) {
                addItemToWishlist(items, tokenVal);
              } else {
                alert("please login to continue");
              }
            }}
          >
            Add to wishlist
          </button>
        ) : (
          <button
            className="card-btn"
            onClick={() => {
              RemoveItemFromWishlist(items._id, tokenVal);
              console.log(items._id);
            }}
          >
            Remove from wishlist
          </button>
        )}
        {cartData.find((product) => product._id === items._id) ? (
          <button
            className="card-btn"
            onClick={() => removeItemFromCart(items._id)}
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="card-btn"
            onClick={() => {
              if (user.isUserLoggedIn) {
                addItemToCart(items);
              } else {
                alert("please login to continue");
              }
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
