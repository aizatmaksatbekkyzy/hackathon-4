import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header/Header";
import AuthContextProvider from "./context/AuthContextProvider";
import AnimalContextProvider from "./contexts/AnimalContextProvider";

const App = () => {
  return (
    <>
      <AnimalContextProvider>
        <AuthContextProvider>
          <Header />
          <MainRoutes />
        </AuthContextProvider>
      </AnimalContextProvider>
    </>
  );
};

export default App;
