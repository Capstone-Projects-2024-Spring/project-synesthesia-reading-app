import Close from "@mui/icons-material/Close";
import Left from "@mui/icons-material/ChevronLeft";
import Right from "@mui/icons-material/ChevronRight";
import { useState, useEffect } from "react";
import React from "react";
//import { Swipeable } from "react-swipeable";

/*
function fakeTextAPI(){
  return {
    text: ["hello", "I", "am", "Elijah"],


  }
}
*/
function Page() {
  //this is the container for a "Page" returned by the pdf

  const Window = ({ words }) => {}; // Swipeable container for colored words
}
function ReaderActionBar({ name, close }) {
  return (
    <div
      id="actionBar"
      className="fixed top-0 left-0 bg-purple-900 w-screen h-16 flex justify-between"
    >
      <div className="m-3 text-blue-100 text-xl font-bold tracking-wide">
        {name}
      </div>

      <div className="relative">
        <Left
          sx={{ color: "white", fontSize: 50 }}
          style={{ position: "absolute", top: 4, right: 180 }}
        />
        <Right
          sx={{ color: "white", fontSize: 50 }}
          style={{ position: "absolute", top: 4, right: 100 }}
        />
        <Close
          sx={{ color: "white", fontSize: 50 }}
          style={{ position: "absolute", top: 4, right: 20 }}
          onClick={close}
        />
      </div>
    </div>
  );
}

function Reader({ document = { name: "Unnown title" }, close }) {
  const [pageNumber, setPageNumber] = useState(0);
  return (
    <>
      <div>
        <ReaderActionBar name={document.name} close={close} />
      </div>
    </>
  );
}
export default Reader;
