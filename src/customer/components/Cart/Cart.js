import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getCart } from "../../../Action/cartAction";
import { getToken, getUser } from "../../../Action/authAction";
function Cart({ cart, updateCartItem, deleteCartItem, jwt }) {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate(`/checkout?step=2`);
  };
  useEffect(() => {
    getCart();
  }, [updateCartItem, deleteCartItem]);
  useEffect(() => {
    const token = getToken();
    if (token && !jwt) {
      try {
        getUser(token);
      } catch (err) {
        navigate("/auth");
      }
    } else if (!token) {
      navigate("/auth");
    }
  }, [jwt, navigate]);
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 p-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10 px-5">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">
                  ₹{cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ cartReducer, authReducer }) => ({
  cart: cartReducer.cart,
  updateCartItem: cartReducer.updateCartItem,
  deleteCartItem: cartReducer.deleteCartItem,
  jwt: authReducer.jwt,
});
export default connect(mapStateToProps)(Cart);
