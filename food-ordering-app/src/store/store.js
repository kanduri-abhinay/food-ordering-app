import { createStore } from "redux";

const rootReducer = (state = { data: [], cartData: [] }, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    case "ADD_CART_ITEM": {
      let cart_data = [...state.cartData];
      cart_data.push(action.payload);
      return { ...state, cartData: cart_data };
    }
    case "REMOVE_CART_ITEM": {
      let cart_data = [...state.cartData];
      cart_data = cart_data.filter(
        (item) => item["id"] != action.payload["id"]
      );
      return { ...state, cartData: cart_data };
    }
    case "EMPTY_CART":
      return { ...state, cartData: [] };
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
