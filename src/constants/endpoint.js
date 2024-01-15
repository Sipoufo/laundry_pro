const URL = process.env.REACT_APP_API_URL;

// Authentication
export const SignInEndpoint = () => URL + "/api/v1/auth/signin";
export const SignUpEndpoint = () => URL + "/api/v1/auth/signup";
export const ForgetPasswordEndpoint = () => URL + "/api/v1/auth/forgetPassword";
export const ResetPasswordEndpoint = () => URL + "/api/v1/auth/resetPassword";