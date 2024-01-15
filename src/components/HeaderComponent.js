import React from "react";
import { IoMenuSharp, IoSettingsOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import SmallButtonWidget from "../widgets/SmallButtonWidget";

const HeaderComponent = () => {
    return (
        <div className="flex flex-row px-6 py-3 justify-between items-center gap-4 bg-white border shadow-md">
            {/* Buttons */}
            <div className="flex flex-row items-center gap-6">
                <button className="mr-4">
                    <IoMenuSharp className="text-lg md:text-xl" />
                </button>
                <SmallButtonWidget
                    icon={<IoSettingsOutline className="text-lg text-white" />}
                    color="bg-cyan-600"
                    name="Reglage"
                />
                <SmallButtonWidget
                    icon={<CiHome className="text-lg text-white" />}
                    color="bg-cyan-600"
                    name="Principal"
                />
                <SmallButtonWidget
                    icon={<GrMoney className="text-lg text-white" />}
                    color="bg-green-600"
                    name="Caisse"
                />
            </div>

            {/* Language form */}
            {/* <form className="flex flex-row items-center gap-2">
                <div className="flex flex-row gap-1 items-center">
                    <input type="radio" name="language" />
                    <label>Fr</label>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <input type="radio" name="language" />
                    <label>En</label>
                </div>
            </form> */}

            {/* User Setting */}
            <button className="flex flex-row gap-4 items-center">
                <p>BLACKCode Yvan</p>
                <div className="flex w-10 h-10 rounded-full bg-cyan-600 text-xl text-white font-bold justify-center items-center">
                    B
                </div>
            </button>
        </div>
    );
};

export default HeaderComponent;
