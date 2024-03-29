import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Login from "./Frames/Login/Login.jsx";
import DocumentLibrary from "./Frames/Documents/Document_Library.jsx"
import axios from "axios";


function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <>
      {profile ? (
        <DocumentLibrary user_profile = {profile}>

        </DocumentLibrary>
        
      ) : (
        <Login loginSuccess={(user) => setUser(user)} />
      )}
    </>
  );
}

export default App;
