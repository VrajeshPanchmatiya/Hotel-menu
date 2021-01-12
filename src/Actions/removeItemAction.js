import { removeType } from "./removeType";
// removeItemAction to remove the item from the cart
export const removeItemAction = (name, price, quantity, productprice) => {
  return (dispatch) => {
    dispatch({
      type: removeType,
      payload: { name, price, quantity, productprice },
      remove: true,
    });
  };
};
