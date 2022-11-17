import React, { useState } from "react";
import AnimalsSideBar from "../components/animals/AnimalsSideBar/AnimalsSideBar";
import "../style/animalSideBar.css";
import AnimalsList from "../components/animals/AnimalsList/AnimalsList";

const SideBarPage = () => {
  const [page, setPage] = useState(1);
  const [isSideBar, setIsSideBar] = useState(true);

  function changeSideBarStatus() {
    setIsSideBar(!isSideBar);
  }

  return (
    <div>
      <AnimalsSideBar isSideBar={isSideBar} setPage={setPage} />
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

export default SideBarPage;
