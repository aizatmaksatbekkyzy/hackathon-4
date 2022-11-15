import React from "react";
import { Routes, Route } from "react-router-dom";
import AnimalsPage from "./pages/AnimalsPage";
import CardPage from "./pages/CardPage";
import CartPage from "./pages/CartPage";
import EditAnimalPage from "./pages/EditAnimalPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/animals",
      element: <AnimalsPage />,
      id: 2,
    },
    {
      link: "/card",
      element: <CardPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditAnimalPage />,
      id: 4,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 5,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 6,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 7,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
