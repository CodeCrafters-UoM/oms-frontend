import React from "react";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import Orders from "../pages/orders/Orders";
import Reports from "../pages/reports/Reports";
import OrderLinks from "../pages/orderlinks/OrderLinks";
import ContactUs from "../pages/contactus/ContactUs";
import Profile from "../pages/profile/Profile";
import Products from "../pages/products/Products";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="reports" element={<Reports />} />
        <Route path="orderlinks" element={<OrderLinks />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login/signup" element={<SignUp />}></Route>
        <Route path="login/forgotpassword" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
