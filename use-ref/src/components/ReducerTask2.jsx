import React, { useReducer, useEffect } from "react";
import { usernamesReducer } from "../reducers/usernamesReducer";
import axios from "axios";
import {
  usersFunction,
  usersSortA_Z,
  usersSortZip,
  usersSortZ_A,
} from "../actions/apiObjects";

export const ReducerTask2 = () => {
  const [usernames, dispatchUsernames] = useReducer(usernamesReducer, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatchUsernames(usersFunction(res.data)));
  }, []);

  return (
    <div>
      <button onClick={() => dispatchUsernames(usersSortA_Z())}>
        Sort A-Z
      </button>
      <button onClick={() => dispatchUsernames(usersSortZ_A())}>
        Sort Z-A
      </button>
      <button onClick={() => dispatchUsernames(usersSortZip("ASC"))}>
        Sort Zip ASC
      </button>
      <button onClick={() => dispatchUsernames(usersSortZip("DESC"))}>
        Sort Zip DESC
      </button>
      {usernames?.map((user) => (
        <p key={user.id}>
          {user.name} {user.address.zipcode}
        </p>
      ))}
    </div>
  );
};
