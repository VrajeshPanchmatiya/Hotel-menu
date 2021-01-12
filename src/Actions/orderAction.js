import { orderType } from "./orderType";
// orderAction to add the Item into the cart
export const orderAction = (name, price, quantity, productprice) => {
  return async (dispatch) => {
    dispatch({
      type: orderType,
      payload: { name, price, quantity, productprice },
    });
  };
};
