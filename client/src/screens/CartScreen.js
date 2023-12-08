import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

import { useCart } from "../zustandStore";
import axios from "../http";
const CartScreen = () => {
  const navigate = useNavigate();
  const { cart: cartItems, addToCart, removeFromCart } = useCart();

  const location = useLocation();
  const { id: productId } = useParams();
  window.scrollTo(0, 0);

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const total = cartItems.length
    ? cartItems?.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)
    : 0;
  const addToCartF = async () => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      if (data) {
        const payload = {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        };
        addToCart(payload);
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (productId) {
      addToCartF();
    }
    // eslint-disable-next-line
  }, [productId, qty]);

  const checkOutHandler = () => {
    navigate("/shipping");
  };

  const removeFromCartHandle = (productId) => {
    removeFromCart(productId); // Pass the product ID as the argument to removeFromCart
  };
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {cartItems?.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems?.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems?.map((item) => (
              <div className="cart-iterm row">
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) => {
                      console.log({ ...item, qty: Number(e.target.value) });
                      addToCart({ ...item, qty: Number(e.target.value) });
                    }}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>PRICE</h6>
                  <h4>${item.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Checkout</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
