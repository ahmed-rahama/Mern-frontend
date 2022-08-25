import React from 'react'
import {useContext} from 'react'
import styled from "styled-components"
import Context from"../store/ContextProvider"
function Login() {
    const {setEmail, setPassword, loginCheck, message} = useContext(Context)
  return (
    <div><h3>Login Form/Sign-in form</h3>
    <label>Email:</label>
    <input type="email" name='email' onChange={e=>setEmail(e.target.value)}/><br/>
    <label>Password:</label>
    <input type="password" name='password' onChange={e=>setPassword(e.target.value)}/><br/>
    <button type='button' onClick={loginCheck}>Send</button>
    <h4 style={{color: 'red'}}>{message}</h4>
    </div>
    
  )
}

export default Login