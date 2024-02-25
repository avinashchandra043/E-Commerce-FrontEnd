import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../Action/orderAction";
import { updatePayment } from "../../../Action/paymentAction";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import { connect } from "react-redux";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = ({ order }) => {
  const [paymentId, setPaymentId] = useState(null);
  const [PaymentStatus, setPayementStatus] = useState(null);
  const { orderId } = useParams();
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPayementStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      getOrderById(orderId);
      updatePayment(data);
    }
  }, [orderId, paymentId]);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fitContent" }}
        >
          <AlertTitle>{PaymentStatus}</AlertTitle>
          Congratulation your order get placed
        </Alert>
      </div>
      <OrderTracker activeStep={1} />
      <Grid
        container
        className="space-y-5 py-5 pt-20 flex flex-col"
        flexDirection="column"
      >
        {order?.orderItems?.map((item) => (
          <Grid
            contianer
            item
            className="flex"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 50px",
            }}
          >
            <Grid item xs={6}>
              <div className="flex item-center">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div className="opacity-50 text-xs font-semibold">
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹ {item.price}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ orderReducer }) => ({
  order: orderReducer.order,
});
export default connect(mapStateToProps)(PaymentSuccess);
