import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PaginationWidget = ({start = 0, end = 0, size = 0, nextFunction, prevFunction}) => {
    return (
        <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
        >
            <span className="text-sm font-normal">
                Showing <span className="font-semibold text-primary">{start}-{end} </span>
                of <span className="font-semibold text-primary">{size}</span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
                <li>
                    <button
                        className={`${start <= 1 && "cursor-not-allowed"} disabled flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                        onClick={() => prevFunction()}
                    >
                        <IoIosArrowBack className="text-lg text-sixth mr-2" />
                    </button>
                </li>
                <li>
                    <button
                        className={`${end >= size && "cursor-not-allowed"} flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                        onClick={() => nextFunction()}
                    >
                        <IoIosArrowForward className="text-lg text-sixth mr-2" />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default PaginationWidget;