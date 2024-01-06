import React from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
import HeaderComponent from "../components/HeaderComponent";

const Index = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 text-sm font-light">
            <div className="relative flex flex-col w-full h-full max-w-screen-2xl overflow-hidden">
                {/* Header Part */}
                <HeaderComponent />

                {/* Body */}
                <div className="flex flex-row flex-grow overflow-hidden gap-6">
                    {/* Menu part */}
                    <NavBarComponent />
                    <div className="flex p-4 w-full">
                        {/* Container */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
