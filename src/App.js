import './App.css'
import {useState, useContext} from 'react'
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Login from './component/Login'
import Context from"./store/ContextProvider"
import CreateAcount from "./component/CreateAcount"
import AddProduct from './component/AddProduct';
function App() {

const {message, products,addProduct}=useContext(Context)
  // handler to send data in server



  // This will run everytime the message is changing
  // login Check


  // add product for this logged in user using faker data
  

  return (
    <div className='App-header'>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/user/login" element= {<Login/>}/>
        <Route path="/user/create" element= {<CreateAcount/>}/>
        <Route path="/product/add" element= {<AddProduct/>}/>
      </Routes>
      
  

      

    

    

  


    </div>
  );
}

export default App;
