import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {GoogleLogin} from "@react-oauth/google";

function App() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-purple-300">Color in Sync</h1>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage}></GoogleLogin>
      </div>
    </>
  );
}

export default App;
