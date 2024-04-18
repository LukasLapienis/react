import { SQUARE, DELETESQUARE, ADD_SQUARE } from "../constants/constants";

export const squaresReducer = (state, action) => {
  switch (action.type) {
    case SQUARE:
      return [...state, "square"];
    case DELETESQUARE:
      return state.slice(0, -1);

    default:
      break;
  }
};

export const customNumberSquaresReducer = (state, action) => {
  let stateCopy = [...state];

  switch (action.type) {
    case ADD_SQUARE:
      for (let i = 0; i < action.payload; i++) {
        stateCopy.push(0);
      }
      break;
    default:
      break;
  }
  return stateCopy;
};
