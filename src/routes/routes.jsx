import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Singup from "../components/Singup/Singup";
import { auth } from "..//firebase";
import { useEffect, useState } from "react";

export default function MyRoutes() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name={userName} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Singup />} />
      </Routes>
    </Router>
  );
}
