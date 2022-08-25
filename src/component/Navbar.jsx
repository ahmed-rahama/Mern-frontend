import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
   <Navigation className="navbar navbar-expand-lg  text-dark" > 
   <div className="container-fluid"> 
   <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="container" id="navbarNavAltMarkup">
   <div className="d-flex"> 
   <Link className="nav-link mx-4" to="/">
              Home
            </Link>
            <Link className="nav-link mx-4" to="/user/create">
            Create Account 
            </Link>
            <Link className="nav-link mx-4" to="/user/login">
            Login 
            </Link>
            <Link className="nav-link mx-4" to="/product/add">
            Add Product 
            </Link>
   </div>
   
   </div>
   </div>
   </Navigation>
  )
}
const Navigation= styled.nav`
background-color : #d8caca;
border-radius: 10px;

margin:10px; 
>div{
    background-color : #6e7271
}
`

export default Navbar