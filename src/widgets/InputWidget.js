import React from "react";

const InputWidget = ({
    label,
    type,
    onChange,
    value,
    disable = false,
    isRequired = false,
}) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <label className="font-medium">{label}</label>
            <input
                type={type}
                className="px-4 py-2 border rounded-lg focus:border-orange-700"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disable}
                required={isRequired}
            />
        </div>
    );
};

export default InputWidget;
