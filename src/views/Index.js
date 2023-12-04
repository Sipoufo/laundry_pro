import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 text-sm">
            <div className="relative w-full h-full max-w-screen-2xl overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}

export default Index;