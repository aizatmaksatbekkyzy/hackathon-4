import React, { useState } from "react";
import AnimalsList from "../components/animals/AnimalsList/AnimalsList"
import AnimalsSideBar from "../components/animals/AnimalsSideBar/AnimalsSideBar";

const CardPage = () => {
  const [page, setPage] = useState(1);
 const [isSideBar, setIsSideBar] = useState(true);
 
  function changeSideBarStatus(){
   setIsSideBar(!isSideBar);
  }

return (
  <div>
      < AnimalsSideBar isSideBar={isSideBar} setPage={setPage}/>
  <div className='products'><AnimalsList page={page} setPage={setPage} changeSideBarStatus={changeSideBarStatus}/></div>
  </div>

  );
};

export default CardPage;
