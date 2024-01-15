import React, { useState } from "react";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/ButtonWidget";
import { SignInService } from "../../services/authenticationService";
import LoadingComponent from "../../components/loadingComponent";
import AlertMessageComponent from "../../components/alertMessageComponent";

const LoginView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [data, setData] = useState(false);

    const SignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            email: username,
            password,
        };
        const response = await SignInService(data);
        if (response.isError) {
            setActiveMessageBox(true);
            setData(response);
        } else {
            window.location.replace("/");
        }
        setLoading(false);
    };

    if (loading) {
        return <LoadingComponent />;
    }
    return (
        <div className="flex flex-col flex-grow p-6 gap-4 text-center">
            <h1 className="text-4xl font-bold text-orange-700">LAUNDRY PRO</h1>
            <h2 className="text-xl font-semibold">Sign In</h2>
            <form className="flex flex-col gap-4 text-start" onSubmit={SignIn}>
                <InputWidget
                    label={"Username"}
                    type={"text"}
                    value={username}
                    onChange={setUsername}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    value={password}
                    onChange={setPassword}
                    disable={false}
                    isRequired={true}
                />
                <a href="/forgetPassword" className="text-orange-700 font-medium text-end">Forget password</a>
                <ButtonWidget name={"Submit"} />
                <a href="/signUp" className="text-orange-700 font-medium text-center hover:underline underline-offset-2">I don't have account !</a>
            </form>
            <AlertMessageComponent
                isActive={activeMessageBox}
                title={"Error"}
                message={data["message"]}
                setIsActive={setActiveMessageBox}
                isError={true}
            />
        </div>
    );
};

export default LoginView;