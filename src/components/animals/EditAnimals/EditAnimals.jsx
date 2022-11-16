import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAnimals } from "../../../contexts/AnimalContextProvider";

const EditAnimals = () => {
  const { saveEditedAnimal, animalDetails, getOneAnimal } = useAnimals();
  const [animal, setAnimal] = useState(animalDetails);

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(animalDetails);

  useEffect(() => {
    getOneAnimal(id);
  }, []);

  useEffect(() => {
    setAnimal(animalDetails);
  }, [animalDetails]);

  const handleInp = e => {
    if (e.target.name === "price") {
      let obj = {
        ...animal,
        price: Number(e.target.value),
      };
      setAnimal(obj);
    } else {
      let obj = {
        ...animal,
        [e.target.name]: e.target.value,
      };
      setAnimal(obj);
    }
  };
  if (!animalDetails || !animal) {
    return <h1>Loading...</h1>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        backgroundColor: "rgb(12, 113, 172)",
        width: "350px",
        marginLeft: "450px",
        height: "250px",
      }}>
      <div>
        <h2 style={{ color: "white" }}>Edit </h2>
        <div>
          <input
            className="breed-inp"
            type="text"
            placeholder="Breed"
            name="breed"
            onChange={handleInp}
            value={animal.breed}
          />
        </div>
        <div>
          <input
            className="name-inp"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInp}
            value={animal.name}
          />
        </div>
        <div>
          <input
            className="age-inp"
            type="text"
            placeholder="Age"
            name="age"
            onChange={handleInp}
            value={animal.age}
          />
        </div>
        <div>
          <input
            className="desc-inp"
            type="text"
            placeholder="Descriprion"
            name="desc"
            onChange={handleInp}
            value={animal.desc}
          />
        </div>
        <div>
          <input
            className="img-inp"
            type="url"
            placeholder="Image"
            name="img"
            onChange={handleInp}
            value={animal.img}
          />
        </div>
        <div>
          <input
            className="img-inp"
            type="number"
            placeholder="price"
            name="price"
            onChange={handleInp}
            value={animal.price}
          />
        </div>
        <button
          onClick={() => {
            saveEditedAnimal(animal);
            navigate("/card");
          }}>
          SaveEdited
        </button>
      </div>
    </div>
  );
};

export default EditAnimals;
