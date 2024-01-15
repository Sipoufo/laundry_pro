import React from "react";
import SmallButtonWidget from "../../widgets/SmallButtonWidget";
import { MdDelete } from "react-icons/md";
import PaginationWidget from "../../widgets/PaginationWidget";

const Users = () => {
    return (
        <div className="flex flex-col gap-4 w-full ">
            <div className="flex flex-row gap-4 items-center">
                <h1 className="text-2xl font-medium">List of client</h1>
                <SmallButtonWidget
                    color={"bg-orange-600"}
                    name={"Add expense"}
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
                                Num
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                First name
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Last name
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Transaction
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                            >
                                2022-04-06
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                EXP045
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                lastName
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                internet
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                100.00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                <SmallButtonWidget
                                    icon={
                                        <MdDelete className="text-xl" />
                                    }
                                    color={"bg-red-400"}
                                />
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
                    </tbody>
                </table>
                <PaginationWidget />
            </div>
        </div>
    );
};

export default Users;
