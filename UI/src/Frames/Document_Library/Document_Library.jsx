import Add from "@mui/icons-material/Add";
import { Input, Button } from "@mui/material";
import TextSnippet from "@mui/icons-material/TextSnippet";
import { useState, useEffect, Profiler } from "react";
import React from "react";
import Reader from "./../Reader/Reader.jsx";
function DocumentLibrary({ user_profile }) {

  const userId = 1;
  const [documentList, setDocumentList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [openDocument, setOpenDocument] = useState(null);
  function Document({ name = "Unnamed Document", id, index }) {
    return (
      <>
        <div className="flex flex-col items-center" id={id}>
          <TextSnippet
            sx={{ fontSize: 75 }}
            onClick={() => {
              setOpenDocument(documentList[index]);
            }}
          ></TextSnippet>
          <p className="truncate w-40">{name}</p>
        </div>
      </>
    );
  }
  function UploadDocument() {
    return (
      <>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Input type="file" onChange={handle_upload} />
            <Button
              onClick={() => {
                setUploading(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </>
    );
  }
  const handle_upload = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    const formData = new FormData();
    formData.append('document', selectedFile);
    formData.append('user_id', userId );

    console.log(formData);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data", // Specify the Content-Type header
      },
      body: formData,
    };
    fetch(`${import.meta.env.VITE_DOMAIN}/api/document`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("document POST request was accepted");
        console.log("Document ID:", data.document_id); // Access the document ID from the response data
        var newList = Array.from(documentList);
        newList.push({file_info: selectedFile, id: data.document_id});
        setDocumentList(newList);
        setUploading(false);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
        alert("Error uploading your document");
      });
  };
  function DocumentLibaryActionBar() {
    return (
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
    );
  }
  function DocumentGrid() {
    return (
      <div className="flex flex-wrap gap-x-10 gap-y-10 my-20 mx-5">
        {documentList.length > 0 &&
          documentList.map((document, index) => (
            <Document
              name={document.file_info.name}
              key={index}
              id={document.id}
              index={index}
              className="size-2"
            />
          ))}
      </div>
    );
  }
  return (
    <>
      {openDocument ? (
        <Reader document={openDocument} close={() => setOpenDocument(null)} />
      ) : (
        <div className="h-screen">
          <DocumentLibaryActionBar />
          <DocumentGrid />
          {uploading ? <UploadDocument /> : <></>}
        </div>
      )}
    </>
  );
}

export default DocumentLibrary;
