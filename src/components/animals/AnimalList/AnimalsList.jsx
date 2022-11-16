import React, { useEffect } from "react";
import { useAnimals } from "../../../contexts/AnimalContextProvider";
import CardAnimal from "../CardAnimal/CardAnimal";
// import Pagination from "@mui/material/Pagination";

const AnimalsList = () => {
  const { animals, getAnimals } = useAnimals();
  useEffect(() => {
    getAnimals();
  }, []);

  // console.log(animals, getAnimals);
  // const itemsOnPage = 6;
  // const count = Math.ceil(products.length / itemsOnPage);

  //   const handlePage = (e, p) => {
  //   setPage(p);
  //  };
  //   function currentData() {
  //   const begin = (page - 1) * itemsOnPage;
  //   const end = begin + itemsOnPage;
  //   return products.slice(begin, end);
  // }

  return (
    <div>
      <h1
        style={{
          marginLeft: "40%",
          marginTop: "5%",
          color: "rgb(8,112,224)",
        }}>
        Animals List
      </h1>
      <div className="animals-list">
        {/* <button>SideBar and Filter</button> */}

        {animals ? (
          animals.map(item => <CardAnimal key={item.id} item={item} />)
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
    </div>
  );
};

export default AnimalsList;
