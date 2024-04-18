import {
  SHOW_USERNAMES,
  SHOW_USERNAMES_A_Z,
  SHOW_USERNAMES_ZIP,
  SHOW_USERNAMES_Z_A,
} from "../constants/constants";

export const usernamesReducer = (state, action) => {
  let stateCopy = [...state];
  switch (action.type) {
    case SHOW_USERNAMES:
      stateCopy = action.payload;
      break;
    case SHOW_USERNAMES_A_Z:
      stateCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case SHOW_USERNAMES_Z_A:
      stateCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    case SHOW_USERNAMES_ZIP:
      stateCopy.sort((a, b) => {
        let aValue = parseFloat(a.address.zipcode);
        let bValue = parseFloat(b.address.zipcode);
        if (action.payload === "ASC") {
          return aValue < bValue ? 1 : -1;
        } else {
          return aValue > bValue ? 1 : -1;
        }
      });
      break;
    default:
      break;
  }
  return stateCopy;
};
