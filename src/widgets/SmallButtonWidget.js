import React from "react";

const SmallButtonWidget = ({ icon, name, color }) => {
    return (
        <button className={`flex px-4 py-2 rounded-lg ${color} text-white font-medium rounded-2xl gap-2 items-center`}>
            {icon}
            <p>{name}</p>
        </button>
    );
};

export default SmallButtonWidget;
