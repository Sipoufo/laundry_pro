import React from "react";
import { Outlet } from "react-router-dom";

const IndexAuth = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-50 text-sm">
            <div className="relative w-full h-full max-w-screen-2xl overflow-hidden">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex flex-row h-auto w-full md:w-8/12 lg:w-8/12 bg-white shadow-lg">
                        {/* Part for formular */}
                        <Outlet />
                        {/* Image */}
                        <div className="relative w-0 md:w-5/12">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/image1.jpg"
                                }
                                className="w-full h-full object-cover"
                                alt="auth_img"
                            />
                            <div className="absolute top-0 w-full h-full bg-orange-700 bg-opacity-60" />
                            <div className="absolute top-0 w-full h-full">
                                <p className="text-3xl text-white text-end font-semibold px-8 py-6">
                                    Laundry Management Software
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexAuth;
