export function getCountsAnimalstInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  // console.log(cart);
  return cart ? cart.animals.length : 0;
}
export const calcSubPrice = animal => +animal.count * animal.item.price;

export const calcTotalPrice = animals => {
  return animals.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
