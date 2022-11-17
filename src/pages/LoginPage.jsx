import React from "react";
import { useState } from "react";
import { UserContext } from "../context/AuthContextProvider";
import "../style/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = UserContext();

  return (
    <>
      <div id="head-book">
        <div id="main">
          <h2 id="text">Login User</h2>
        </div>
        <div id="head-inp">
          <input
            id="lol"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            id="lili"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button id="coco" onClick={() => login(username, password)}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
