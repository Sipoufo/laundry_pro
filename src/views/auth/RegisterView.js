import React, { useState } from "react";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/ButtonWidget";
import LoadingComponent from "../../components/loadingComponent";
import { SignUpService } from "../../services/authenticationService";
import AlertMessageComponent from "../../components/alertMessageComponent";

const RegisterView = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeMessageBox, setActiveMessageBox] = useState(false);
    const [data, setData] = useState(false);
    const [arrayErrors, setArrayErrors] = useState(null);

    const SignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            firstName,
            lastName,
            email,
            password,
            phone
        };
        const response = await SignUpService(data);
        if (response.isError) {
            setActiveMessageBox(true);
            setData(response);
            setArrayErrors(response.arrayError);
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
            <h2 className="text-xl font-semibold">Sign Up</h2>
            <form className="flex flex-col gap-4 text-start" onSubmit={SignUp}>
                <InputWidget
                    label={"First name"}
                    type={"text"}
                    value={firstName}
                    onChange={setFirstName}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Last name"}
                    type={"text"}
                    value={lastName}
                    onChange={SetLastName}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Email"}
                    type={"email"}
                    value={email}
                    onChange={setEmail}
                    disable={false}
                    isRequired={true}
                />
                <InputWidget
                    label={"Phone"}
                    type={"text"}
                    value={phone}
                    onChange={setPhone}
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
                <ButtonWidget name={"Submit"} />
                <a href="/" className="text-orange-700 font-medium text-center hover:underline underline-offset-2">I have account !</a>
            </form>
            <AlertMessageComponent
                isActive={activeMessageBox}
                title={"Error"}
                message={data["message"]}
                setIsActive={setActiveMessageBox}
                isError={true}
                arrayError={arrayErrors}
            />
        </div>
    );
};

export default RegisterView;
