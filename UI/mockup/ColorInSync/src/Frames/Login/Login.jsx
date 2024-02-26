import { useState } from "react";
import "./Login.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

function Login({ loginSuccess }) {
  const login = (codeResponse) => {
    console.log(codeResponse);
    loginSuccess(codeResponse);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center space-y-10 justify-center h-screen">
        <h1 className="text-3xl font-bold text-purple-500">Color in Sync</h1>
        <GoogleLogin onSuccess={login} onError={errorMessage}></GoogleLogin>

        <button className="bg-purple-500 text-gray-200">
          Continue as guest
        </button>
      </div>
    </>
  );
}

export default Login;
