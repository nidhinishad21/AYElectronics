import React, { useState } from "react";

import Header from "../components/Header";

import { useNavigate } from "react-router-dom";
import { useCart } from "../zustandStore";

const ShippingScreen = () => {
  window.scrollTo(0, 0);
  const navigate  = useNavigate()

  const { shippingAddress ,setShippingAddress} = useCart();

  const [address, setAddress] = useState(shippingAddress.address||"");
  const [city, setCity] = useState(shippingAddress.city||"");
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode||"");
  const [country, setCountry] = useState(shippingAddress.country||"");



  const submitHandler = (e) => {
    e.preventDefault();
    const data = { address, city, postalCode, country }
    setShippingAddress(data)
  localStorage.setItem("shippingAddress", JSON.stringify(data));

    navigate("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
