import React from "react";
import "./Header.css";
import { BiCartAlt } from "react-icons/bi";
import { TiHeartFullOutline } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { LogoutHandler } from "../../services/Loghandler";
import { useWishlist } from "../../contexts/wishlist-context";
import { useCart } from "../../contexts/cart-context";

const Header = () => {
  const { user, setUser } = useAuth();
  const { wishlist } = useWishlist();
  const { cartData } = useCart();

  return (
    <div className="header-container">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <h3>digitl dazzle</h3>
        </Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="search products" />
        <span>
          <button
            style={{
              background: "transparent",
              color: "var(--lightBlue)",
              border: "1px solid var(--lightBlue)",
            }}
          >
            search{" "}
          </button>
        </span>
      </div>
      <div className="navbar-links-container">
        <Link to="/cart" className="navbar-links">
          <span>
            <BiCartAlt style={{ "font-size": "25px" }} />

            {cartData.length > 0 ? (
              <span style={{ "font-size": "10px" }}>{cartData.length}</span>
            ) : (
              <span></span>
            )}
          </span>
        </Link>
        <Link to="/wishlist" className="navbar-links">
          <span>
            <TiHeartFullOutline style={{ "font-size": "25px" }} />{" "}
            {wishlist?.length > 0 ? (
              <span style={{ "font-size": "10px" }}> {wishlist?.length}</span>
            ) : (
              <span></span>
            )}
          </span>
        </Link>
        <Link to="/login" className="navbar-links">
          {!user.isUserLoggedIn ? (
            <Link
              className="navbar-links"
              to="/login"
              style={{ color: "var(--lightBlue)" }}
            >
              login
            </Link>
          ) : (
            <Link
              className="navbar-links"
              to="/"
              onClick={() => LogoutHandler(setUser)}
              style={{ color: "var(--lightBlue)" }}
            >
              logout
            </Link>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
