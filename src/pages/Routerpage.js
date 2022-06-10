import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Routerpage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}
