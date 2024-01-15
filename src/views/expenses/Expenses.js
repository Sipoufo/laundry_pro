import React, { useEffect, useState } from "react";
import SmallButtonWidget from "../../widgets/SmallButtonWidget";
import { MdDelete } from "react-icons/md";
import PaginationWidget from "../../widgets/PaginationWidget";
import { FetchExpenses } from "../../services/expenseService";
import LoadingComponent from "../../components/loadingComponent";
import { FetchCategories } from "../../services/categoryService";
import ExpenseModal from "./ExpenseModal";
import AlertMessageComponent from "../../components/alertMessageComponent";

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    // const [updateActive, setUpdateActive] = useState(false);
    // const [actualProduct, setActualProduct] = useState();
    const [result, setResult] = useState({});
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);

    const fetch = async () => {
        const data = await FetchExpenses(1, 20);
        console.log(data.data["data"]);
        if (data.data["data"]) {
            setExpenses(data.data["data"]);
        }
    };
    const fetchCategories = async () => {
        const data = await FetchCategories();
        console.log(data.data);
        if (data.data) {
            setCategory(data.data);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetch();
        fetchCategories();
        setLoading(false);
    }, []);

    if (loading) {
        return <LoadingComponent />;
    } else {
        return (
            <div className="flex flex-col gap-4 w-full ">
                <div className="flex flex-row gap-4 items-center">
                    <h1 className="text-2xl font-medium">List of expenses</h1>
                    <SmallButtonWidget
                        color={"bg-orange-600"}
                        name={"Add expense"}
                        click={() => {setActive(true)}}
                    />
                </div>
                <div className="flex flex-col p-4 bg-white shadow-lg overflow-auto gap-10">
                    <div className="flex flex-row gap-2 items-center">
                        <p>Show</p>
                        <select className="px-2 py-1 border bg-white">
                            <option>10</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <p>entities</p>
                    </div>
                    <table className="text-sm text-left text-fourth">
                        <thead className="text-xs text-secondary uppercase bg-gray-50 border-2">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Num
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Deposit
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => {
                                return (
                                    <tr
                                        key={expense["expenseId"]}
                                        className="bg-white border-b hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {expense["createdAt"]}
                                        </td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                        >
                                            PR{expense["expenseId"]}
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {expense["title"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {expense["category"]["name"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {expense["price"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {expense["delivered"] ? (
                                                <SmallButtonWidget
                                                    icon={
                                                        <MdDelete className="text-xl" />
                                                    }
                                                    color={"bg-red-400"}
                                                />
                                            ) : (
                                                <p>Il n'y a pas</p>
                                            )}
                                        </td>
                                        <td className="flex items-center px-6 py-4 whitespace-nowrap w-2/12 gap-4">
                                            <SmallButtonWidget
                                                name={"Update"}
                                                color={"bg-cyan-600"}
                                            />
                                            <SmallButtonWidget
                                                name={"Delete"}
                                                color={"bg-red-400"}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <PaginationWidget />
                </div>
                <ExpenseModal active={active} setActive={setActive} categories={category} />
                <AlertMessageComponent
                    isActive={activeMessageBox}
                    title={isError ? "Error" : "Success"}
                    message={result["message"]}
                    setIsActive={setActiveMessageBox}
                    isError={isError}
                />
            </div>
        );
    }
};

export default Expenses;
