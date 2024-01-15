import React, { useEffect, useState } from "react";
import SmallButtonWidget from "../../widgets/SmallButtonWidget";
import PaginationWidget from "../../widgets/PaginationWidget";
import LoadingComponent from "../../components/loadingComponent";
import ProductModal from "./ProductModal";
import CustomerModalUpdate from "./ProductModalUpdate";
import AlertMessageComponent from "../../components/alertMessageComponent";
import { DeleteProduct, FetchProducts } from "../../services/productService";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    const [updateActive, setUpdateActive] = useState(false);
    const [actualProduct, setActualProduct] = useState();
    const [result, setResult] = useState({});
    const [isError, setIsError] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);

    const onDelete = async () => {
        setLoading(true);

        const res = await DeleteProduct(actualProduct);
        setActiveMessageBox(true);
        setResult(res);
        setIsError(res.isError);
        setLoading(false);
    }

    const fetch = async () => {
        const data = await FetchProducts(1, 20);
        console.log(data);
        console.log(data.data["data"]);
        if (data.data["data"]) {
            setProducts(data.data["data"]);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetch();
        setLoading(false);
    }, []);

    if (loading) {
        return <LoadingComponent />;
    }
    return (
        <div className="flex flex-col gap-4 w-full ">
            <div className="flex flex-row gap-4 items-center">
                <h1 className="text-2xl font-medium">List of client</h1>
                <SmallButtonWidget
                    color={"bg-orange-600"}
                    name={"Add Customer"}
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
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Num
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Normal Ironing
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Fast Ironing
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Normal Detergent
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Fast Detergent
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Normal GloriousPressing
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/12">
                                Fast GloriousPressing
                            </th>
                            <th scope="col" className="px-6 py-3 w-2/12">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => {
                                return (
                                    <tr key={product["customerId"]} className="bg-white border-b hover:bg-gray-50">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-2/12"
                                        >
                                            PR{product["productId"]}
                                        </th>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {product["name"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-2/12">
                                            {product["normalIroning"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {product["fastIroning"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {product["normalDetergent"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {product["fastDetergent"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {product["normalGloriousPressing"]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap w-1/12">
                                            {product["fastGloriousPressing"]}
                                        </td>
                                        <td className="flex items-center px-6 py-4 whitespace-nowrap w-2/12 gap-4">
                                            <SmallButtonWidget
                                                name={"Update"}
                                                color={"bg-cyan-600"}
                                                click={() => {
                                                    setActualProduct(product["customerId"])
                                                    setUpdateActive(true)
                                                }}
                                            />
                                            <SmallButtonWidget
                                                name={"Delete"}
                                                color={"bg-red-400"}
                                                click={() => {
                                                    setActualProduct(product["customerId"])
                                                    onDelete()
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <PaginationWidget />
            </div>
            <ProductModal active={active} setActive={setActive} />
            <CustomerModalUpdate active={updateActive} setActive={setUpdateActive} customerId={actualProduct} />
            <AlertMessageComponent
                isActive={activeMessageBox}
                title={isError ? "Error" : "Success"}
                message={result["message"]}
                setIsActive={setActiveMessageBox}
                isError={isError}
            />
        </div>
    );
};

export default Products;
