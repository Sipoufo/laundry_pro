import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/ButtonWidget";
import AlertMessageComponent from "../../components/alertMessageComponent";
import LoadingComponent from "../../components/loadingComponent";
import { saveExpense } from "../../services/expenseService";

const ExpenseModal = ({ active, setActive, categories }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState(0);
    const [isDelivered, setIsDelivered] = useState(false);
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [arrayErrors, setArrayErrors] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            title,
            categoryId: category,
            isDelivered,
            price
        };

        console.log(data);

        const res = await saveExpense(data);
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
                    Add Expense
                </h1>

                <InputWidget
                    label={"Title"}
                    type={"text"}
                    value={title}
                    onChange={setTitle}
                    disable={false}
                    isRequired={true}
                />

                <InputWidget
                    label={"Price"}
                    type={"number"}
                    value={price}
                    onChange={setPrice}
                    disable={false}
                    isRequired={true}
                />

                <div className="w-full flex flex-col gap-2">
                    <label className="font-medium">Category</label>
                    <select
                        className="px-4 py-2 border rounded-lg focus:border-orange-700"
                        value={category}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setCategory(e.target.value);
                        }}
                        required
                    >
                        {categories.map((category) => {
                            return (
                                <option
                                    key={category["categoryId"]}
                                    value={category["categoryId"]}
                                >
                                    {category["name"]}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <label className="font-medium">isDelivered</label>
                    <select
                        className="px-4 py-2 border rounded-lg focus:border-orange-700"
                        value={true}
                        onChange={(e) => setIsDelivered(e.target.value)}
                        required
                    >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>

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

export default ExpenseModal;
