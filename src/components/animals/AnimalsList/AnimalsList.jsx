import React, { useEffect, useState } from "react";
import CardAnimal from "../CardAnimal/CardAnimal";
import Pagination from "@mui/material/Pagination";
import { useAnimals } from "../../../contexts/AnimalContextProvider";
import "../../../style/animalSideBar.css"

const AnimalsList = ({ page, setPage, changeSideBarStatus }) => {
  const { animals, getAnimals } = useAnimals();

  useEffect(() => {
    getAnimals();
  }, []);

  const itemsOnPage = 3;

  const count = Math.ceil(animals.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return animals.slice(begin, end);
  }

  return (
    <div>
        <div id="btn-sb">
      <h1
        style={{
          marginTop: "5%",
          color: "rgb(8,112,224)",
        }}>
        Animals List
      </h1>
      <button className="btn-filter" onClick={changeSideBarStatus}>
        Filter&Search Menu
      </button>
      </div>
      <div className="animals-list">
        {animals ? (
          currentData().map(item => <CardAnimal key={item.id} item={item} />)
        ) : (
          <h4>Loading...</h4>
        )}

        {/* <Pagination
          style={{
            marginLeft: "480px",
          }}
          color="primary"
          count={count}
          page={page}
          onChange={handlePage}
        /> */}
      </div>
      <div  className="lol">
      <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        />
        </div>
    </div>
    // <div className='products-block'>
    //     <div className='title'>
    //     <h3>Cats&Dogs</h3>
    //     </div>
    //       <button id='btn-sb' onClick={changeSideBarStatus}>Filter&Search Menu</button>
    //     {animals ? (
    //         currentData().map(item => (
    //             <CardAnimal key={item.id} item={item} />
    //         ))
    //     ): (
    //         <h3>Loading...</h3>
    //     )}
    //     <Pagination className='lol' count={count} page={page} onChange={handlePage} />
    // </div>
  );
};

export default AnimalsList;
