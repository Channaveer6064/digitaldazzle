import React from "react";
import "./AddressPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../contexts/addressContext";
export const AddressPage = () => {
  const navigator = useNavigate();
  const { address, setAddress } = useAddress();
  const dummyAddress = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "7204729970",
    deliveryAddress: "66,BTM 2nd stage,Mico Layout,Bangalore,560076",
  };
  console.log(address);
  return (
    <div className="address-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setAddress(address);
          navigator("/ordersuccesspage");
        }}
      >
        <h1 className="address-header">Delivery Address</h1>
        <input
          placeholder="Enter first name"
          className="address-input"
          name="firstName"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setAddress({ ...address, firstName: e.target.value });
          }}
        />
        <input
          placeholder="Enter last name"
          className="address-input"
          name="lastName"
          type="text"
          onChange={(e) => {
            e.preventDefault();
            setAddress({ ...address, lastName: e.target.value });
          }}
        />
        <input
          placeholder="Enter phone number"
          className="address-input"
          name="firstName"
          type="number"
          onChange={(e) =>
            setAddress({ ...address, phoneNumber: e.target.value })
          }
        />
        <input
          className="address-input"
          name="deliveryAddress"
          type="text"
          placeholder="Enter address with pincode"
          onChange={(e) =>
            setAddress({ ...address, deliveryAddress: e.target.value })
          }
        />
        <button className="address-btn" type="submit">
          <strong> Submit Address</strong>
        </button>
        <button
          className="address-btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setAddress(dummyAddress);
            navigator("/ordersuccesspage");
          }}
        >
          <strong>Submit test Address</strong>
        </button>
      </form>
    </div>
  );
};
