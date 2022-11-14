import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { MOTIONS, JSON_API_ANIMALS } from "../helpers/bigConsts";
// import { useNavigate } from "react-router-dom";

export const animalContext = createContext();
export const useAnimals = () => useContext(animalContext);

const INIT_STATE = {
  animals: [],
  animalDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case MOTIONS.GET_ANIMALS:
      return { ...state, animals: action.payload };
    case MOTIONS.GET_ANIMAL_DETAILS:
      return { ...state, animalDetails: action.payload };
    default:
      return state;
  }
};

const AnimalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // const navigate = useNavigate();
  // const location = useLocation();

  const getAnimals = async () => {
    const { data } = await axios(`${JSON_API_ANIMALS}`);
    dispatch({
      type: MOTIONS.GET_ANIMALS,
      payload: data,
    });
  };

  const addAnimal = async newAnimal => {
    await axios.post(JSON_API_ANIMALS, newAnimal);
    getAnimals();
  };

  const getOneAnimal = async id => {
    let res = await axios(`${JSON_API_ANIMALS}/${id}`);
    dispatch({
      type: MOTIONS.GET_ANIMAL_DETAILS,
      payload: res.data,
    });
  };
  const deleteAnimal = async id => {
    await axios.delete(`${JSON_API_ANIMALS}/${id}`);
    getAnimals();
  };
  const saveEditedAnimal = async newAnimal => {
    await axios.patch(`${JSON_API_ANIMALS}/${newAnimal.id}`, newAnimal);
    getAnimals();
  };

  const value = {
    animals: state.animals,
    animalDetails: state.animalDetails,

    addAnimal,
    getAnimals,
    deleteAnimal,
    saveEditedAnimal,
    getOneAnimal,
  };

  return (
    <animalContext.Provider value={value}>{children}</animalContext.Provider>
  );
};

export default AnimalContextProvider;