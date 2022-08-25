import React from 'react'
import styled from "styled-components"

function Home() {
  return (
    <HomePage> <div><h1> Home page </h1> <img src="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/></div></HomePage>
  )
}

let HomePage= styled.div`
    width:100%;
    height:100%;
    align-items : center;
    display: flex;
    justify-content : center;
    margin: 0 auto;
 >div{
 justify-content:center ;
 align-items: center;
 >img{
    display:block;
    align-items :center;
    width: 100%;
    height: 100%;
    opacity:0.8;
   
 }
 >h1{
    text-align: center;
    font-size:4rem;
    color: #18181b;
 }
 }   

`

export default Home