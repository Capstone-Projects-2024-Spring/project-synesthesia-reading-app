import Add from '@mui/icons-material/Add';
import TextSnippet from '@mui/icons-material/TextSnippet';
import { useState, useEffect } from "react";
import React from 'react';
function Document_Library() {
    const [documentList, setDocumentList] = useState([]);
    function Document({name = "Unnamed Document", key}) {
        return (
            <>
                <div className=''>
                    <TextSnippet fontSize='large'>
                    </TextSnippet>
                    <p>{name}</p>
                </div>
            </>
        )
    }
    function upload_document() {
        var documentName = prompt("Enter Document Name");
        var newList = Array.from(documentList);
        newList.push({name: documentName});
        setDocumentList(newList);
    }
    return (
        <>
            <div className="h-screen">
                <div id="actionBar" className="fixed top-0 left-0 bg-purple-900 w-screen h-16">
                    <div className="relative">
                        <Add
                            sx={{ color: 'white', fontSize: 50 }}
                            style={{ position: 'absolute', top: 4, right: 12 }}
                            onClick={upload_document}
                        />
                    </div>
                </div>
                <div className="grid grid-flow-col auto-cols-max m-20">
                    {documentList.length > 0 && documentList.map((document, index) => <Document name = {document.name} key = {index}/> )}
                </div>
            </div>
        </>

    )
}


export default Document_Library;