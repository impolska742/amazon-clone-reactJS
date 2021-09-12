export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};
