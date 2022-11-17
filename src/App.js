import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header/Header";
import AuthContextProvider from "./context/AuthContextProvider";
import AnimalContextProvider from "./contexts/AnimalContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
// import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <AnimalContextProvider>
          <AuthContextProvider>
            <Header />
            <MainRoutes />
            {/* <Footer /> */}
          </AuthContextProvider>
        </AnimalContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
