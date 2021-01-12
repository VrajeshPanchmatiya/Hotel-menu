import { addType } from "./addType";
// addItemAction to update the cart value
export const addItemAction = (name, price, quantity, productprice) => {
  return (dispatch) => {
    dispatch({
      type: addType,
      payload: { name, price, quantity, productprice },
    });
  };
};
