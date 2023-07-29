import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { priceCalculater } from "../services/priceCalculator";
import { useWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cart-context";
export const Cart = () => {
  const { cartData, removeItemFromCart, updateCartValue } = useCart();
  const { user } = useAuth();
  const { wishlist, addItemToWishlist, RemoveItemFromWishlist } = useWishlist();
  let totalcartvalue = 0;
  if (cartData.length > 0) {
    totalcartvalue = priceCalculater(cartData);
  }
  return (
    <div className="cart-container">
      <div>
        <h1
          style={{
            margin: "10px",
            alignSelf: "flex-start",
            justifySelf: "flex-start",
          }}
        >
          {" "}
          Your Cart Items
        </h1>
        {cartData.length != 0 ? (
          <div className="cart-items-container">
            {cartData.map((items) => (
              <div className="cart-card" key={items._id}>
                <div id="img-container">
                  <img src={items.image} className="cart-img" />
                </div>
                <div className="cart-content">
                  <h2>Title: {items.name}</h2>
                  <p>
                    Description:
                    <br />
                    {items.description}
                  </p>
                  <h4>Price: ${items.price}</h4>
                  <div className="qty-content">
                    Quantity:
                    <button
                      className="mybtn"
                      onClick={() => {
                        updateCartValue(items._id, "increment");
                      }}
                    >
                      +
                    </button>
                    {items.qty > 0 ? items.qty : 0}
                    <button
                      className="mybtn"
                      disabled={true && items.qty === 0}
                      onClick={() => {
                        if (items.qty > 0) {
                          updateCartValue(items._id, "decrement");
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="cart-btns">
                    <button
                      onClick={() => removeItemFromCart(items._id)}
                      className="btn"
                    >
                      Remove From Cart
                    </button>
                    {wishlist.find((item) => items._id === item._id) ? (
                      <button
                        className="btn"
                        onClick={() => RemoveItemFromWishlist(items._id)}
                      >
                        Remove From Wishlist
                      </button>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => {
                          if (user.isUserLoggedIn) {
                            addItemToWishlist(items);
                            removeItemFromCart(items._id);
                          } else {
                            alert("Login In to Continue");
                            navigator("/login");
                          }
                        }}
                      >
                        Move To WishList
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
      <div>
        {cartData.length === 0 ? (
          <></>
        ) : (
          <div className="column">
            {" "}
            <h1 style={{ margin: "10px" }}>Cart Value</h1>
            <div className="cart-value">
              <div>
                <p>
                  <strong>ITEMS</strong>
                </p>
                <span>{cartData.length}</span>
              </div>
              <div>
                <p>
                  <strong>Price</strong>
                </p>
                <span>$ {totalcartvalue.total}</span>
              </div>
              <div>
                <p>
                  <strong>GST</strong>
                </p>
                <span>10%</span>
              </div>
              <div>
                <p>
                  <strong>Total</strong>
                </p>
                <span>$ {totalcartvalue.totalprice}</span>
              </div>
              <Link to="address">
                <button className="cart-btn">CHECKOUT</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
