import React from 'react'
import {useContext} from 'react'
import styled from "styled-components"
import Context from"../store/ContextProvider"
function CreateAcount() {
    const {setUsername, setEmail, setPassword, sendToBackend}= useContext(Context)
  return (
    <div>
     <h3>Create Account </h3>
        <label>Username:</label>
        <input type="text" name='username' onChange={e=>setUsername(e.target.value)}/><br/>
        <label>Email:</label>
        <input type="email" name='email'onChange={e=>setEmail(e.target.value)}/><br/>
        <label>Password:</label>
        <input type="pasword" name='password' onChange={e=>setPassword(e.target.value)}/><br/>
        <button type='button' onClick={sendToBackend}>Send</button>

    </div>
  )
}

export default CreateAcount