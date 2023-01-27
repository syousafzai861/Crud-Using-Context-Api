import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from './Component/Home';
import AddUser from './Component/AddUser';
import EditUser from "./Component/EditUser";
import 'bootstrap//dist/css/bootstrap.min.css';
function App() {
  return (
    <div style={{maxwidth:"30rem", margin:"4rem auto"}}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route path='/add' element={<AddUser/>} ></Route>
        <Route path='/edit' element={<EditUser/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
