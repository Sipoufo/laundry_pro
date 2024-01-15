import { RemoveItems, SetToken } from "./tokenService";
import axios from "axios";
import { GetCookies } from "./cookieService";

export const VerifyToken = async () => {
    console.log("Je passe")
    return axios
        .post(
            `${process.env.REACT_APP_API_URL}/api/v1/auth/refresh`,
            {
                refreshToken: GetCookies("refreshToken"),
            }
        ).then((response) => {
            SetToken(response.data["token"]);
            return;
        })
        .catch(() => {
            RemoveItems();
            window.location.replace("/");
            return;
        });
};