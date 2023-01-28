export const updateData = (payload) => {
  return {
    type: "UPDATE_DATA",
    payload: payload,
  };
};

export const addCartItem = (payload) => {
  return {
    type: "ADD_CART_ITEM",
    payload: payload,
  };
};

export const removeCartItem = (payload) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: payload,
  };
};
export const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};
