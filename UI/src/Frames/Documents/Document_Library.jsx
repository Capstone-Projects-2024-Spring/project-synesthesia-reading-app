import Add from "@mui/icons-material/Add";
import { Input } from "@mui/material";
import TextSnippet from "@mui/icons-material/TextSnippet";
import { useState, useEffect, Profiler } from "react";
import React from "react";
function Document_Library({ user_profile }) {
  const [documentList, setDocumentList] = useState([]);
  const [uploading, setUploading] = useState(false);
  function Document({ name = "Unnamed Document", id }) {
    return (
      <>
        <div className="" id={id}>
          <TextSnippet fontSize="large"></TextSnippet>
          <p>{name}</p>
        </div>
      </>
    );
  }
  function UploadDocument() {
    return (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Input type="file" onChange={handle_upload} />
          </div>
        </div>
      </>
    );
  }
  const handle_upload = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    var newList = Array.from(documentList);
    newList.push(selectedFile);
    setDocumentList(newList);
    setUploading(false);
  };
  if (uploading) {
    return (
      <>
        <div>
          <UploadDocument></UploadDocument>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-screen">
          <div
            id="actionBar"
            className="fixed top-0 left-0 bg-purple-900 w-screen h-16 flex justify-between"
          >
            <div className="m-3 text-blue-100 text-xl font-bold tracking-wide">
              {user_profile.name}
            </div>

            <div className="relative">
              <Add
                sx={{ color: "white", fontSize: 50 }}
                style={{ position: "absolute", top: 4, right: 20 }}
                onClick={() => {
                  setUploading(true);
                }}
              ></Add>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-4 my-20 mx-5">
            {documentList.length > 0 &&
              documentList.map((document, index) => (
                <Document name={document.name} id={index} className="size-2" />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Document_Library;
