import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./frontend/contexts/product-context";
import { FilterProvider } from "./frontend/contexts/filter-context";
import { AuthProvider } from "./frontend/contexts/auth-context";
import { WishlistProvider } from "./frontend/contexts/wishlist-context";
import { CartProvider } from "./frontend/contexts/cart-context";

// import { AddressProvider } from "./frontend/contexts/addressContext";
import { ModalProvider } from "./frontend/contexts/modalContext";
// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
    {/* <AddressProvider> */}
    <ModalProvider>
      <CartProvider>
        {" "}
        <FilterProvider>
          <ProductProvider>
            <Router>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </Router>
          </ProductProvider>
        </FilterProvider>
      </CartProvider>
    </ModalProvider>
    {/* </AddressProvider> */}
  </AuthProvider>,
  document.getElementById("root")
);
