import Cookies from "universal-cookie";
import { Decrypt, Encrypt } from "../helpers/encryptHelper";

const cookies = new Cookies(null, { path: "/" });

export const SetCookies = (name, value) => {
    cookies.set(name, Encrypt(value));
}

export const GetCookies = (name) => {
    return Decrypt(cookies.get(name));
}