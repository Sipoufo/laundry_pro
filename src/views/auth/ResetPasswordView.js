import React, { useState } from "react";
import InputWidget from "../../widgets/InputWidget";
import ButtonWidget from "../../widgets/ButtonWidget";
// import { useParams } from "react-router-dom";

const ResetPasswordView = () => {
    // const { id } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="flex flex-col flex-grow p-6 gap-4 text-center">
            <h1 className="text-4xl font-bold text-orange-700">LAUNDRY PRO</h1>
            <h2 className="text-xl font-semibold">Forget Password</h2>
            <form className="flex flex-col gap-4 text-start">
                <InputWidget
                    label={"Password"}
                    type={"password"}
                    value={newPassword}
                    onChange={setNewPassword}
                />
                <InputWidget
                    label={"Confirm password"}
                    type={"password"}
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                />
                <ButtonWidget name={"Submit"} />
                <a
                    href="/signUp"
                    className="text-orange-700 font-medium text-center hover:underline underline-offset-2"
                >
                    I have account !
                </a>
            </form>
        </div>
    );
};

export default ResetPasswordView;
