import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import IndexAuth from "../views/auth/IndexAuth";
import Index from "../views/Index";
import Dashboard from "../views/dashboard/Dashboard";
import Products from "../views/products/Products";
import Sales from "../views/sales/Sales";
import LoginView from "../views/auth/LoginView";
import RegisterView from "../views/auth/RegisterView";
import ForgetPasswordView from "../views/auth/ForgetPasswordView";
import Error from "../views/Error";
import { GetToken } from "../services/tokenService";
import Customers from "../views/customers/Customers";
import Expenses from "../views/expenses/Expenses";

const RouteManagement = () => {
    if (GetToken() == null) {
        return (
            <Routes>
                <Route path="/" element={<IndexAuth />}>
                    <Route index element={<LoginView />} />
                    <Route path="signUp" element={<RegisterView />} />
                    <Route path="forgetPassword" element={<ForgetPasswordView />} />
                </Route>
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    };

    return (
        <Routes>
            <Route path="/" element={<Index />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="sales" element={<Sales />} />
                <Route path="customers" element={<Customers />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="*" element={<Customers />} />
            </Route>
        </Routes>
    );
};

export default RouteManagement;
