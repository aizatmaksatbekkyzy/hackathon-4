import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalsPage from "./pages/AnimalsPage";
import CartPage from "./pages/CartPage";
import EditAnimalPage from "./pages/EditAnimalPage";
import HomePage from "./pages/HomePage";

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
      link: "/cart",
      element: <CartPage />,
      id: 3,
    },
    {
      link: "/edit",
      element: <EditAnimalPage />,
      id: 4,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {PUBLIC_ROUTES.map(item => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
