import { orderType } from "../Actions/orderType";
import { addType } from "../Actions/addType";
import { removeType } from "../Actions/removeType";
// Initial Value of state
const initialState = {
  data: [],
};
// crudcart for add, update and remove the item from the cart
const crudCart = (newData, payload, remove) => {
  let addedItemIndex = newData.findIndex(({ name }) => {
    return name === payload.name;
  });
  const updatedItem = newData[addedItemIndex];
  if (remove && updatedItem) {
    if (updatedItem.quantity === 1) {
      newData.splice(addedItemIndex, 1);
    } else {
      updatedItem.price -= payload.productprice;
      updatedItem.quantity -= 1;
      newData[addedItemIndex] = updatedItem;
    }
  } else if (updatedItem) {
    updatedItem.price += payload.productprice;
    updatedItem.quantity += 1;
    newData[addedItemIndex] = updatedItem;
  } else {
    newData = newData.concat(payload);
  }

  return newData;
};
// orderReducer for store
export const orderReducer = (
  state = initialState,
  { type, payload, remove }
) => {
  switch (type) {
    case orderType:
      return {
        ...state,
        data: [...crudCart(state.data, payload)],
      };
    case addType:
      return {
        ...state,
        data: [...crudCart(state.data, payload)],
      };
    case removeType:
      return {
        ...state,
        data: [...crudCart(state.data, payload, remove)],
      };
    default:
      return state;
  }
};
