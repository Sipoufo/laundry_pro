import React from "react";
import NavBarButton from "../widgets/NavBarButtonWidget";
import { IoTicketOutline } from "react-icons/io5";
import { TbAirBalloon } from "react-icons/tb";
import { HiOutlineUsers, HiOutlineUser } from "react-icons/hi";
import { FaWpforms } from "react-icons/fa6";

const NavBarComponent = () => {
    return (
        <div className="hidden md:flex flex-col gap-6 overflow-y-auto bg-white border shadow-md">
            <NavBarButton link={"/products"} name={"Products"} icon={<IoTicketOutline className="text-3xl" />} />
            <NavBarButton link={"/sales"} name={"Sales"} icon={<TbAirBalloon className="text-3xl" />} />
            <NavBarButton link={"/customers"} name={"Customers"} icon={<HiOutlineUsers className="text-3xl" />} />
            <NavBarButton link={"/expenses"} name={"Expenses"} icon={<FaWpforms className="text-3xl" />} />
            <NavBarButton link={"/users"} name={"Users"} icon={<HiOutlineUser className="text-3xl" />} />
        </div>
    );
};

export default NavBarComponent;
