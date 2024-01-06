import React from "react";
import SmallButtonWidget from "../../widgets/SmallButtonWidget";
import { MdDelete } from "react-icons/md";
import PaginationWidget from "../../widgets/PaginationWidget";

const Sales = () => {
    return (
        <div className="flex flex-col gap-4 w-full ">
            <div className="flex flex-row gap-4 items-center">
                <h1 className="text-2xl font-medium">Sales</h1>
            </div>
            <hr />
            <form className="flex flex-row gap-4">
                <div className="flex flex-col gap-1">
                    <label>De</label>
                    <input type="text" className="px-4 py-2 border" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>A</label>
                    <input type="text" className="px-4 py-2 border" />
                </div>
                <div className="flex flex-col justify-end">
                    <div className="flex flex-row items-center gap-4">
                        <SmallButtonWidget
                            name={"Print"}
                            color={"bg-orange-600"}
                        />
                        <SmallButtonWidget
                            name={"Ticket"}
                            color={"bg-orange-600"}
                        />
                    </div>
                </div>
            </form>
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
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Num
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Customer
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Tax
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Remise
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Près de
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Nbr of services
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Livraison
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Marche
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-1/12"
                            >
                                00282
                            </th>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                2023-11-06
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                ABC ABC
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                20
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                0
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                30.0
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                Mehmet
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                1
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                <SmallButtonWidget
                                    name={"Paid"}
                                    color={"bg-green-600"}
                                />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                <SmallButtonWidget
                                    name={"Pas livré"}
                                    color={"bg-red-600"}
                                />
                            </td>
                            <td className="flex items-center px-6 py-4 whitespace-nowrap w-2/12 gap-4">
                                <SmallButtonWidget
                                    name={"Update"}
                                    color={"bg-cyan-600"}
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

export default Sales;
