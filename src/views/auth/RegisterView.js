import React, { useState } from "react";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/buttonWidget";

const RegisterView = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col flex-grow p-6 gap-4 text-center">
            <h1 className="text-4xl font-bold text-orange-700">LAUNDRY PRO</h1>
            <h2 className="text-xl font-semibold">Sign Up</h2>
            <form className="flex flex-col gap-4 text-start">
                <InputWidget
                    label={"Username"}
                    type={"text"}
                    value={username}
                    onChange={setUsername}
                />
                <InputWidget
                    label={"Email"}
                    type={"email"}
                    value={email}
                    onChange={setEmail}
                />
                <InputWidget
                    label={"Phone"}
                    type={"text"}
                    value={phone}
                    onChange={setPhone}
                />
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    value={password}
                    onChange={setPassword}
                />
                <ButtonWidget name={"Submit"} />
                <a href="/" className="text-orange-700 font-medium text-center hover:underline underline-offset-2">I have account !</a>
            </form>
        </div>
    );
};

export default RegisterView;
