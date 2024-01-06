import React from "react";
import { GrMoney } from "react-icons/gr";
import { IoTicketOutline } from "react-icons/io5";
import { PiMoneyThin, PiTicketThin, PiUsersThin } from "react-icons/pi";

const Dashboard = () => {
    return (
        <div className="flex flex-row gap-10 w-full">
            <div className="flex flex-grow flex-col gap-6 h-full w-full">
                {/* GLobal infos */}
                <div className="h-1/3 grid grid-cols-3 gap-4">
                    {/* Number of Customers */}
                    <div className="flex flex-col w-full h-full items-center gap-2 bg-white shadow-lg p-4">
                        <PiUsersThin className="text-2xl md:text-4xl lg:text-5xl text-orange-600" />
                        <h1>Clients</h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-orange-600 font-medium">10</p>
                    </div>
                    {/* Number of Customers */}
                    <div className="flex flex-col w-full h-full items-center gap-2 bg-white shadow-lg p-4">
                        <PiTicketThin className="text-2xl md:text-4xl lg:text-5xl text-orange-600" />
                        <h1>Categories</h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-orange-600 font-medium">21</p>
                    </div>
                    {/* Number of Customers */}
                    <div className="flex flex-col w-full h-full items-center gap-2 bg-white shadow-lg p-4">
                        <PiMoneyThin className="text-2xl md:text-4xl lg:text-5xl text-orange-600" />
                        <h1>Today's sale</h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-orange-600 font-medium">0 XFA</p>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex flex-col w-3/12 bg-white shadow-lg">

            </div>
        </div>
    );
};

export default Dashboard;
