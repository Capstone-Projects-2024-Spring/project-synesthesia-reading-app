import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Login from "./Frames/Login/Login.jsx";
import DocumentLibrary from "./Frames/Document_Library/Document_Library.jsx";
import axios from "axios";
import Calibration from "./Frames/Calibration/Calibration.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [colors, setColors] = useState(null);
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
        colors ? (
          <DocumentLibrary user_profile={profile} />
        ) : (
          <Calibration
            setColors={(colors) => {
              setColors(colors);
            }}
          />
        )
      ) : (
        <Login loginSuccess={(user) => setUser(user)} />
      )}
    </>
  );
}

export default App;
