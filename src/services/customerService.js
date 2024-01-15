import { GetToken, RemoveItems } from "./tokenService";
import axios from "axios";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetchCustomers = async (pageNumber, pageSize) => {
    VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/v1/customer/${pageNumber}/${pageSize}`,
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
            if (e.response == undefined) {
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

export const saveCustomer = async (data) => {
    VerifyToken();
    return axios
        .post(
            `${process.env.REACT_APP_API_URL}/api/v1/customer`,
            data,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: "Customer created",
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

export const GetOneCustomer = async (customerId) => {
    VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/v1/customer/${customerId}`,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: "Customer created",
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

export const UpdateCustomer = async (data, customerId) => {
    VerifyToken();
    return axios
        .put(
            `${process.env.REACT_APP_API_URL}/api/v1/customer/${customerId}`,
            data,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: "Customer Updated",
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

export const DeleteCustomer = async (customerId) => {
    VerifyToken();
    return axios
        .delete(
            `${process.env.REACT_APP_API_URL}/api/v1/customer/${customerId}`,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: "Customer deleted",
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