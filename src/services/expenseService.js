import { GetToken, RemoveItems } from "./tokenService";
import axios from "axios";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetchExpenses = async (pageNumber, pageSize) => {
    VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/v1/expense/${pageNumber}/${pageSize}`,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: null,
                data: response.data,
            };
        })
        .catch((e) => {
            if (e.response === undefined) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] === 401) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["title"],
                };
            }
        });
};

export const saveExpense = async (data) => {
    VerifyToken();
    return axios
        .post(
            `${process.env.REACT_APP_API_URL}/api/v1/expense`,
            data,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: "Expense created",
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] === 401) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["title"],
                    arrayError: e.response.data["fieldErrors"]
                };
            }
        });
};

export const GetOneExpense = async (expenseId) => {
    VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/v1/expense/${expenseId}`,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: "Expense created",
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] === 401) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["title"],
                };
            }
        });
};

export const UpdateExpense = async (data, expenseId) => {
    VerifyToken();
    return axios
        .put(
            `${process.env.REACT_APP_API_URL}/api/v1/expense/${expenseId}`,
            data,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: "Expense Updated",
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] === 401) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["title"],
                    arrayError: e.response.data["fieldErrors"]
                };
            }
        });
};

export const DeleteExpense = async (expenseId) => {
    VerifyToken();
    return axios
        .delete(
            `${process.env.REACT_APP_API_URL}/api/v1/expense/${expenseId}`,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: "Expense deleted",
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] === 401) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["title"],
                };
            }
        });
};
