import React, { useState } from "react";
import "../style/animalSideBar.css";

import AnimalsList from "../components/animals/AnimalsList/AnimalsList";
import AnimalsSideBar from "../components/animals/AnimalsSideBar/AnimalsSideBar";

const CardPage = () => {
  const [page, setPage] = useState(1);
  const [isSideBar, setIsSideBar] = useState(false);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <div>
      <AnimalsSideBar
        setIsSideBar={setIsSideBar}
        isSideBar={isSideBar}
        setPage={setPage}
      />
      <div className="products">
        <AnimalsList
          page={page}
          setPage={setPage}
          changeSideBarStatus={changeSideBarStatus}
        />
      </div>
    </div>
  );
};

export default CardPage;
