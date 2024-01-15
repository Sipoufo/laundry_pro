import axios from "axios";
import {
    ForgetPasswordEndpoint,
    ResetPasswordEndpoint,
    SignInEndpoint,
    SignUpEndpoint,
} from "../constants/endpoint";
import { SetToken, SetUserName } from "./tokenService";
import { SetCookies } from "./cookieService";

export const SignInService = async (data) => {
    return axios
        .post(SignInEndpoint(), data)
        .then((response) => {
            SetToken(response.data["token"]);
            SetUserName(response.data["user"]["firstName"]);
            SetCookies("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
                code: 200,
            };
        })
        .catch((e) => {
            if (!e.response) {
                window.location.replace("/error");
            }else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: "User / password is incorrect",
                };
            }
        });
};

export const SignUpService = async (data) => {
    return axios
        .post(SignUpEndpoint(), data)
        .then((response) => {
            SetToken(response.data["token"]);
            SetUserName(response.data["user"]["firstName"]);
            SetCookies("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
                code: 200,
            };
        })
        .catch((e) => {
            console.log(e);
            if (!e.response) {
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

export const ForgetPasswordService = async (data) => {
    return axios
        .post(ForgetPasswordEndpoint(), data)
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            if (!e.response) {
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

export const ResetPasswordService = async (data) => {
    return axios
        .post(ResetPasswordEndpoint(), data)
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            if (!e.response) {
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};
