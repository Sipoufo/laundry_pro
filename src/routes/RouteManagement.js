import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexAuth from "../views/auth/IndexAuth";
import Index from "../views/Index";
import LoginView from "../views/auth/LoginView";
import RegisterView from "../views/auth/RegisterView";
import ForgetPasswordView from "../views/auth/ForgetPasswordView";

const RouteManagement = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />}>
                <Route path="/" element={<IndexAuth />}>
                    <Route index element={<LoginView />} />
                    <Route path="signUp" element={<RegisterView />} />
                    <Route path="forgetPassword" element={<ForgetPasswordView />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default RouteManagement;
