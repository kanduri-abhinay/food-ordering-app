import { createStore } from "redux";

const rootReducer = (state = { data: {} }, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
