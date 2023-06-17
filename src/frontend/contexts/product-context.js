import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [ProductData, setProductData] = useState([]);
  const url = "/api/products";
  const fetchProductdata = async () => {
    try {
      const response = await fetch(url);
      const arr = await response.json();
      setProductData(arr?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductdata();
  }, []);

  return (
    <ProductContext.Provider
      value={{ ProductData, setProductData, fetchProductdata }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => useContext(ProductContext);

export { ProductProvider, useProducts, ProductContext };
