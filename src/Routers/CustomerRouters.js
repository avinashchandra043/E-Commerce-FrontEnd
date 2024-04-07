import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../customer/pages/Home";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import { getToken, getUser } from "../Action/authAction";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
import Page404 from "../Pages/Page404/Page404";

const CustomerRouters = ({ jwt }) => {
  const token = getToken();

  if (token && !jwt) {
    getUser(token);
  }
  const isAuthenticated = () => {
    return jwt !== null;
  };

  const PrivateRoute = ({ path, element }) => {
    return isAuthenticated() ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={<PrivateRoute path="/cart" element={<Cart />} />}
        />
        <Route
          path="/checkout"
          element={<PrivateRoute path="/checkout" element={<Checkout />} />}
        />
        <Route
          path="/account/order"
          element={<PrivateRoute path="/account/order" element={<Order />} />}
        />
        <Route
          path="/account/order/:orderId"
          element={
            <PrivateRoute
              path="/account/order/:orderId"
              element={<OrderDetails />}
            />
          }
        />
        <Route
          path="/payment/:orderId"
          element={
            <PrivateRoute
              path="/payment/:orderId"
              element={<PaymentSuccess />}
            />
          }
        />

        <Route path="*" element={<Page404 />} />
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
