import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import AnimalContextProvider from "./contexts/AnimalContextProvider";

const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <MainRoutes />
      </AuthContextProvider>
      <AnimalContextProvider>
        <Navbar />
        <MainRoutes />
      </AnimalContextProvider>
    </>
  );
};

export default App;
