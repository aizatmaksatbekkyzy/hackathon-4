import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import AnimalContextProvider from "./contexts/AnimalContextProvider";

const App = () => {
  return (
    <>
      <AnimalContextProvider>
        <Navbar />
        <MainRoutes />
      </AnimalContextProvider>
    </>
  );
};

export default App;
