import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/bigConsts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountsAnimalstInCart,
} from "../helpers/functions";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);
const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountsAnimalstInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          animals: [],
          totalPrice: 0,
        })
      );
      cart = {
        animals: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: getCountsAnimalstInCart(),
    });
  };
  const cart = animal => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        animals: [],
        totalPrice: 0,
      };
    }
    let newAnimal = {
      item: animal,
      count: 1,
      subPrice: +animal.price,
    };
    // let animalToFind = cart.animals.filter(elem => elem.item.id === animal.id);
    // if (animalToFind.length === 0) {
    //   cart.animals.push(newAnimal);
    // } else {
    //   cart.animals = cart.animals.filter(elem => elem.item.id !== animal.id);
    // }
    cart.totalPrice = calcTotalPrice(cart.animals);
    localStorage.setitem("cart", JSON.stringify(cart));
    getCart();
  };

  const changeAnimalCount = (count, id) => {
    if (count < 0) {
      alert("Count of animal can not be negative!");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.animals = cart.animals.map(animal => {
      if (animal.item.id === id) {
        animal.count = count;
        animal.subPrice = calcSubPrice(animal);
      }
      return animal;
    });
    cart.totalPrice = calcTotalPrice(cart.animals);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };
  const deleteAnimalInCart = id => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.animals = cart.animals.filter(elem => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.animals);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };
  const checkAnimalInCart = id => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.animals.filter(elem => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };
  const values = {
    // addAnimalToCart,
    getCart,
    changeAnimalCount,
    deleteAnimalInCart,
    checkAnimalInCart,
    getCountsAnimalstInCart,

    cart: state.cart,
    cartLength: state.cartLength,
  };
  return (
    <cartContext.Provider value={{ values }}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
