//custom
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimals } from "../../../contexts/AnimalContextProvider";

const AddAnimals = () => {
  const navigate = useNavigate();
  const { addAnimal } = useAnimals();

  const [animal, setAnimal] = useState({
    breed: "",
    name: "",
    age: "",
    img: "",
    desc: "",
    price: "",
  });
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
  return (
    <div className="container">
      <div
        className="container"
        style={{
          marginTop: "100px",
          backgroundColor: "rgb(12, 113, 172)",
          width: "350px",
          marginLeft: "450px",
          height: "250px",
        }}>
        <div>
          <h2 style={{ color: "white" }}>Create Animal</h2>
          <div>
            <input
              className="breed-inp"
              type="text"
              placeholder="Breed"
              name="breed"
              onChange={handleInp}
            />
          </div>
          <div>
            <input
              className="name-inp"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInp}
            />
          </div>
          <div>
            <input
              className="age-inp"
              type="text"
              placeholder="Age"
              name="age"
              onChange={handleInp}
            />
          </div>
          <div>
            <input
              className="desc-inp"
              type="text"
              placeholder="Descriprion"
              name="desc"
              onChange={handleInp}
            />
          </div>
          <div>
            <input
              className="img-inp"
              type="url"
              placeholder="Image"
              name="img"
              onChange={handleInp}
            />
          </div>
          <div>
            <input
              className="img-inp"
              type="number"
              placeholder="price"
              name="price"
              onChange={handleInp}
            />
          </div>
          <button
            onClick={() => {
              addAnimal(animal);
              navigate("/card");
            }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddAnimals;
