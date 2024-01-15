import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/ButtonWidget";
import { saveCustomer } from "../../services/customerService";
import AlertMessageComponent from "../../components/alertMessageComponent";
import LoadingComponent from "../../components/loadingComponent";

const CustomerModal = ({ active, setActive }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [arrayErrors, setArrayErrors] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            firstname: firstName,
            lastname: lastName,
            phone,
            address
        }

        const res = await saveCustomer(data);
        setActiveMessageBox(true);
        setResult(res);
        setIsError(res.isError);
        setArrayErrors(res.arrayError);
        setLoading(false);
    }

    if (loading) {
        return <LoadingComponent />;
    }

    return (
        <div className={`${!active && "hidden"} absolute top-0 left-0 w-screen h-screen flex justify-center items-center`}>
            <div
                className={`${!active && "hidden"} absolute flex justify-center items-center w-screen h-screen top-0 left-0 bg-black bg-opacity-70`}
                onClick={() => setActive(false)}
            ></div>
            <form
                className={`${!active && "hidden"} relative flex flex-col gap-6 w-full md:w-6/12 bg-white px-6 py-6 rounded-lg`}
                onSubmit={onSubmit}
            >
                <button
                    className="absolute right-4 top-4"
                    onClick={() => setActive(false)}
                >
                    <IoMdClose className="text-2xl" />
                </button>
                <h1 className="font-extrabold text-xl text-primary">
                    Add Admin
                </h1>

                <InputWidget
                    label={"First name"}
                    type={"text"}
                    value={firstName}
                    onChange={setFirstName}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Last name"}
                    type={"text"}
                    value={lastName}
                    onChange={setLastName}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"address"}
                    type={"Address"}
                    value={address}
                    onChange={setAddress}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Phone"}
                    type={"phone"}
                    value={phone}
                    onChange={setPhone}
                    disable={false}
                    isRequired={true}
                />

                <div className="flex flex-col md:flex-row gap-4 bg">
                    <ButtonWidget name={"Submit"} />
                </div>
            </form>
            <AlertMessageComponent
                isActive={activeMessageBox}
                title={isError ? "Error" : "Success"}
                message={result["message"]}
                setIsActive={setActiveMessageBox}
                isError={isError}
                arrayError={arrayErrors}
            />
        </div>
    );
};

export default CustomerModal;
