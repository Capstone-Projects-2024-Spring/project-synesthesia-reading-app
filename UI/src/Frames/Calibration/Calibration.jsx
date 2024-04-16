import React from "react";
import { useState } from "react";
import { RgbStringColorPicker } from "react-colorful";
import Left from "@mui/icons-material/ForkLeft";
import Right from "@mui/icons-material/ArrowForward";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var colors = [];
const Calibration = ({ setColors }) => {
  const [index, setIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState("rgb(255, 255, 255)");
  
  const next = () => {
    console.log(colors);
    if (index == 25) {
      setColors(colors);
    }
    setIndex(index + 1);
    colors.push({ letter: letters[index], color: currentColor });
    
  };

  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center space-y-10 justify-center h-screen">
        <p className="text-8xl" style={{ color: currentColor }}>
          {letters[index]} {index}
        </p>
        <RgbStringColorPicker color={currentColor} onChange={setCurrentColor} />
        <Right onClick={next} sx={{fontSize: 100 }} />
      </div>
    </>
  );
};

export default Calibration;
