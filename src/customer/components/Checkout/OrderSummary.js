import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { getOrderById } from "../../../Action/orderAction";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createPayment } from "../../../Action/paymentAction";

const OrderSummary = ({ order }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    getOrderById(orderId);
  }, [orderId]);

  const handleCheckout = () => {
    createPayment(orderId);
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 p-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 px-5">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ₹{order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ orderReducer }) => ({
  order: orderReducer.order,
});

export default connect(mapStateToProps)(OrderSummary);
