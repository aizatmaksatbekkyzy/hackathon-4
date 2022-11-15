import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header/Header";
import AuthContextProvider from "./context/AuthContextProvider";
import AnimalContextProvider from "./contexts/AnimalContextProvider";
// import CartContextProvider from "./contexts/CartContextProvider";

const App = () => {
  return (
    <>
      {/* <CartContextProvider> */}
      <AnimalContextProvider>
        <AuthContextProvider>
          <Header />
          <MainRoutes />
        </AuthContextProvider>
      </AnimalContextProvider>
      {/* </CartContextProvider> */}
    </>
  );
};

export default App;
