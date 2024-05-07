import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../features/shoppingListSlice";

export const ShoppingItemsList = () => {
  const itemsList = useSelector((state) => state.shoppingList);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Items List</h2>
      <ol className="items">
        {itemsList.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => dispatch(removeItems(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
