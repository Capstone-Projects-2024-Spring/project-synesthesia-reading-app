import React from "react";
import X from '@mui/icons-material/Close'

function ReaderActionBar({name, close}) {
  return (
    <div
      id="actionBar"
      className="fixed top-0 left-0 bg-purple-900 w-screen h-16 flex justify-between"
    >
      <div className="m-3 text-blue-100 text-xl font-bold tracking-wide">
        {name}
      </div>

      <div className="relative">
        <X
          sx={{ color: "white", fontSize: 50 }}
          style={{ position: "absolute", top: 4, right: 20 }}
          onClick={close}
        />
      </div>
    </div>
  );
}

function Reader({document = {name: "Unnown title"}, close}) {
  return (<>
    <div>
        <ReaderActionBar name = {document.name} close = {close}/>
        <div>Here is the sample text of the document!</div>
    </div>
  </>);
}
export default Reader;
