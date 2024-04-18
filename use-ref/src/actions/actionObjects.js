import {
  INCREMENT,
  DECREMENT,
  SQUARE,
  DELETESQUARE,
  ADD_SQUARE,
} from "../constants/constants";

export const incrementFunction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementFunction = () => {
  return {
    type: DECREMENT,
  };
};

export const GeneratorFunction = () => {
  return {
    type: SQUARE,
  };
};

export const GeneratorDeleteFunction = () => {
  return {
    type: DELETESQUARE,
  };
};

export const addCustomNumberSquares = (inputValue) => {
  return {
    type: ADD_SQUARE,
    payload: inputValue,
  };
};
