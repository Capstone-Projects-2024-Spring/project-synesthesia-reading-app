import { useState, useEffect } from "react";
import "./App.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Login from "./Frames/Login/Login.jsx";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const changeUser = (newUser) => {
    setUser(newUser);
  };
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
        <div>Welcome, {profile.name}</div>
      ) : (
        <Login loginSuccess={changeUser} />
      )}
    </>
  );
}

export default App;
