import { GetToken, RemoveItems } from "./tokenService";
import axios from "axios";
import { VerifyToken } from "./tokenVerification";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetchProducts = async (pageNumber, pageSize) => {
    VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/v1/product/${pageNumber}/${pageSize}`,
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

export const saveProduct = async (data) => {
    VerifyToken();
    return axios
        .post(
            `${process.env.REACT_APP_API_URL}/api/v1/product`,
            data,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: "Product created",
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

export const GetOneProduct = async (productId) => {
    VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/v1/product/${productId}`,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: "Product created",
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

export const UpdateProduct = async (data, productId) => {
    VerifyToken();
    return axios
        .put(
            `${process.env.REACT_APP_API_URL}/api/v1/product/${productId}`,
            data,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
            return {
                isError: false,
                message: "Product Updated",
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

export const DeleteProduct = async (productId) => {
    VerifyToken();
    return axios
        .delete(
            `${process.env.REACT_APP_API_URL}/api/v1/product/${productId}`,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: "Product deleted",
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