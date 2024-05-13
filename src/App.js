// import logo from './logo.svg';
// import React,{useState} from "react";
// import axios from 'axios';

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
