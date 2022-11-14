import React, { useState } from "react"
import { UserContext } from "../context/AuthContextProvider"
 

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { register } = UserContext();
    return (
      <>
      <div id='head-book'>
      <div id='main'>
      <h2 id='text'>Register User</h2>
      </div>
      <div id='head-inp'>
      <input id='lol' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/> 
      <input id='lili' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/> 
      <button id='coco' onClick={() => register(username, password)}>Register</button>
      </div>
      </div>
      </> 
  
    )
  }
  

export default RegistrationPage