import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalsPage from "./pages/AnimalsPage";
import CardPage from "./pages/CardPage";
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
      link: "/card",
      element: <CardPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditAnimalPage />,
      // id: 4,
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
