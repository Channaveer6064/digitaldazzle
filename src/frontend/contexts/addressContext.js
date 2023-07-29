import React from "react";

import { useState, createContext, useContext } from "react";
const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    deliveryAddress: "",
  });
  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
const useAddress = () => useContext(AddressContext);
export { AddressProvider, useAddress };
