import React from "react";

const ButtonWidget = ({ name }) => {
    return (
        <button className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium">
            {name}
        </button>
    );
};

export default ButtonWidget;
