import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Component/Home";
import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import {GlobalProvider} from "./Component/Context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container" style={{ maxwidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddUser />}></Route>
            <Route path="/edit/:id" element={<EditUser />}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
