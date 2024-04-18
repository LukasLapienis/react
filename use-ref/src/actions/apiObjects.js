import {
  SHOW_USERNAMES,
  SHOW_USERNAMES_A_Z,
  SHOW_USERNAMES_ZIP,
  SHOW_USERNAMES_Z_A,
} from "../constants/constants";

export const usersFunction = (usersList) => {
  return {
    type: SHOW_USERNAMES,
    payload: usersList,
  };
};

export const usersSortA_Z = () => {
  return {
    type: SHOW_USERNAMES_A_Z,
  };
};

export const usersSortZ_A = () => {
  return {
    type: SHOW_USERNAMES_Z_A,
  };
};

export const usersSortZip = (direction) => {
  return {
    type: SHOW_USERNAMES_ZIP,
    payload: direction,
  };
};
