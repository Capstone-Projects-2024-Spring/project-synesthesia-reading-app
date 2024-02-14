import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [R, setR] = useState(0);
  const [G, setG] = useState(0);
  const [B, setB] = useState(0);

  return (
    <>
      <div className="bg-gray-200 flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-purple-300">Color in Sync</h1>
        <button>Red</button>
        <input></input>
      </div>
    </>
  );
}

export default App;
