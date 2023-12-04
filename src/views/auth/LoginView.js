import React, { useState } from "react";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/buttonWidget";

const LoginView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col flex-grow p-6 gap-4 text-center">
            <h1 className="text-4xl font-bold text-orange-700">LAUNDRY PRO</h1>
            <h2 className="text-xl font-semibold">Sign In</h2>
            <form className="flex flex-col gap-4 text-start">
                <InputWidget
                    label={"Username"}
                    type={"text"}
                    value={username}
                    onChange={setUsername}
                />
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    value={password}
                    onChange={setPassword}
                />
                <a href="/forgetPassword" className="text-orange-700 font-medium text-end">Forget password</a>
                <ButtonWidget name={"Submit"} />
                <a href="/signUp" className="text-orange-700 font-medium text-center hover:underline underline-offset-2">I don't have account !</a>
            </form>
        </div>
    );
};

export default LoginView;