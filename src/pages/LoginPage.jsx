import React from 'react'
import { useState } from 'react'
import { UserContext } from '../context/AuthContextProvider';

const LoginPage = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const { login } = UserContext();


 
  return (
    <>
    <h2>Login User</h2>
    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
    <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
     <button onClick={() => login(username, password)}>Login</button>
    </>
  )
}

export default LoginPage