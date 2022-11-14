import React, { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const authContext = React.createContext();
export const UserContext = () => useContext(authContext)

const API = 'http://35.239.251.89/';

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    
    const navigate = useNavigate();

    const config = {
        headers: {'Content-Type': 'multipart/form-data'}
       };

       
   const register = async (username, password) => {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);



    try {
        const res = await axios.post(`${API}register/`, formData, config);
        console.log(res);
        navigate('/login');
    } catch(error) {
        console.log(error);
        setError('Error occured')
    }
   };

   const login = async (username, password) => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);


    try {
        //? используем try  когда хотим чтобы код сработал даже тогда , когда код выдает ошибку
        let res = await axios.post(`${API}api/token/`, formData, config);
        navigate("/");
        console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data));
        localStorage.setItem("username", username);
        setUser(username);
      } catch (error) {
        console.log(error);
        setError("Wrong username or password");
      }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUser('');
        navigate('/');
       };


  return (
    <authContext.Provider value={{
        user,
        error,

        register,
        login,
        logout,
        // checkAuths
    }}>
       { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider