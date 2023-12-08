import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../zustandStore";
import Header from "./../components/Header";

const PaymentScreen = () => {
  window.scrollTo(0, 0);
  const navigate  = useNavigate()
  
  const { shippingAddress } = useCart();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  
  const submitHandler = (e) => {
    e.preventDefault();
    
    navigate("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                // value={paymentMethod}
                // onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
            </div>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
