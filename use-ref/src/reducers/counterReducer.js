import { INCREMENT, DECREMENT } from "../constants/constants";

export const counterReducer = (state, action) => {
  let stateCopy = state;

  switch (action.type) {
    case INCREMENT:
      stateCopy += 1;
      break;
    case DECREMENT:
      stateCopy -= 1;
      break;
    default:
      break;
  }
  return stateCopy;
};
