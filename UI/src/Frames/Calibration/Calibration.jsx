import React from "react";
import { useState } from "react";
import { RgbStringColorPicker } from "react-colorful";
import Left from "@mui/icons-material/ForkLeft";
import Right from "@mui/icons-material/ArrowForward";

const graphemes = [
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
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
var colors = [];
const Calibration = ({ setColors }) => {
  const [index, setIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState("rgb(255, 255, 255)");

  function uploadColors(colors) {
    // Sending the request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(colors),
    };
    fetch(`${import.meta.env.VITE_DOMAIN}/api/colorProfileUp`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("POST request was accepted");
        setColors(colors);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
        setColors(colors);
      });
  }

  const next = () => {
    if (index == graphemes.length - 1) {
      uploadColors(colors);
    }
    setIndex(index + 1);
    colors.push({ grapheme: graphemes[index], color: currentColor });
  };

  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center space-y-10 justify-center h-screen">
        <p className="text-8xl" style={{ color: currentColor }}>
          {graphemes[index]}
        </p>
        <RgbStringColorPicker color={currentColor} onChange={setCurrentColor} />
        <Right onClick={next} sx={{ fontSize: 100 }} />
      </div>
    </>
  );
};

export default Calibration;
