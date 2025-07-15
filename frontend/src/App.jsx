import React from "react";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import { Routes,Route } from "react-router-dom";
import axios from "axios"

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    )
}