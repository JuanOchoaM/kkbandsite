import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./navbar.css"
import Login from "./Registration/Login";
import SignUp from "./Registration/SignUp";
import Merch from "./pages/Merch";
import NavBar from "./NavBar";

export default function Navigator() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
   <Router>
    <NavBar isAuthenticated={isAuthenticated}  setIsAuthenticated={setIsAuthenticated}/>
       <Routes>
         <Route exact path="/" element={<Merch  isAuthenticated={isAuthenticated}/>}/>
         <Route path="/merch" element={<Merch  isAuthenticated={isAuthenticated} />}/>
         <Route path="/music" element={<Music />}/>
         <Route path="/live-performances" element={<LivePerformances />}/>
         <Route path="/login" element={<Login isAuthenticated={isAuthenticated}  setIsAuthenticated={setIsAuthenticated}/>}/>
         <Route path="/signup" element={<SignUp isAuthenticated={isAuthenticated}  setIsAuthenticated={setIsAuthenticated}/>}/>
       </Routes>
   </Router>
  
  );
}

function Music() {
  return <h2>Music</h2>;
}

function LivePerformances() {
  return <h2>Live Performances</h2>;
}

