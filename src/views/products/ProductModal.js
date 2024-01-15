import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/ButtonWidget";
import AlertMessageComponent from "../../components/alertMessageComponent";
import LoadingComponent from "../../components/loadingComponent";
import { saveProduct } from "../../services/productService";

const ProductModal = ({ active, setActive }) => {
    const [name, setName] = useState("");
    const [normalIroning, setNormalIroning] = useState("");
    const [fastIroning, setFastIroning] = useState("");
    const [normalDetergent, setNormalDetergent] = useState("");
    const [fastDetergent, setFastDetergent] = useState("");
    const [normalGloriousPressing, setNormalGloriousPressing] = useState("");
    const [fastGloriousPressing, setFastGloriousPressing] = useState("");
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [arrayErrors, setArrayErrors] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name,
            normalIroning,
            fastIroning,
            normalDetergent,
            fastDetergent,
            normalGloriousPressing,
            fastGloriousPressing,
        };

        const res = await saveProduct(data);
        setActiveMessageBox(true);
        setResult(res);
        setIsError(res.isError);
        setArrayErrors(res.arrayError);
        setLoading(false);
    };

    if (loading) {
        return <LoadingComponent />;
    }

    return (
        <div
            className={`${
                !active && "hidden"
            } absolute top-0 left-0 w-screen h-screen flex justify-center items-center overflow-auto`}
        >
            <div
                className={`${
                    !active && "hidden"
                } absolute flex justify-center items-center w-screen h-screen overflow-auto top-0 left-0 bg-black bg-opacity-70`}
                onClick={() => setActive(false)}
            ></div>
            <form
                className={`${
                    !active && "hidden"
                } relative flex flex-col gap-6 w-full md:w-6/12 bg-white px-6 py-6 rounded-lg`}
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
                    label={"Name"}
                    type={"text"}
                    value={name}
                    onChange={setName}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"Normal Ironing"}
                    type={"number"}
                    value={normalIroning}
                    onChange={setNormalIroning}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"Fast Ironing"}
                    type={"number"}
                    value={fastIroning}
                    onChange={setFastIroning}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"normalDetergent"}
                    type={"number"}
                    value={normalDetergent}
                    onChange={setNormalDetergent}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"Fast Glorious Pressing"}
                    type={"number"}
                    value={fastDetergent}
                    onChange={setFastDetergent}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"normalGloriousPressing"}
                    type={"number"}
                    value={normalGloriousPressing}
                    onChange={setNormalGloriousPressing}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"FastGloriousPressing"}
                    type={"number"}
                    value={fastGloriousPressing}
                    onChange={setFastGloriousPressing}
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

export default ProductModal;
