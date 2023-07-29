import "./App.css";
import Home from "./frontend/pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./frontend/components/header/Header";
import { Footer } from "./frontend/components/footer/Footer";
import ProductListing from "./frontend/pages/productListing/ProductListing";
import Login from "./frontend/pages/auth/Login";
import Wishlist from "./frontend/pages/wishlist/Wishlist";
import Signup from "./frontend/pages/auth/Signup";
import { Cart } from "./frontend/pages/Cart";
import { AddressPage } from "./frontend/pages/AddressPage";
import { RequiresAuth } from "./frontend/Auth/RequiresAuth";
import { ProductDetails } from "./frontend/pages/productdetail/ProductDetails";
import { OrderSuccess } from "./frontend/pages/ordersuccespage/OrderSuccess";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route path="/productdetails/:items" element={<ProductDetails />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />{" "}
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />{" "}
        <Route path="/cart/address" element={<AddressPage />} />
        <Route path="/ordersuccesspage" element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
