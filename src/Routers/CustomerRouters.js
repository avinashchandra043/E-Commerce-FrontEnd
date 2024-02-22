import React from "react";
import Home from "../customer/pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import { connect } from "react-redux";
import { getToken, getUser } from "../Action/authAction";

const CustomerRouters = ({ jwt }) => {
  const token = getToken();
  if (token && !jwt) {
    getUser(token);
  }
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Home />}></Route>
        <Route path="/register" element={<Home />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};
const mapStateToProps = ({ authReducer }) => ({
  jwt: authReducer.jwt,
});
export default connect(mapStateToProps)(CustomerRouters);
