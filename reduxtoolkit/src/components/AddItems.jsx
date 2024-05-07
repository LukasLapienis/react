import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, addAsync } from "../features/shoppingListSlice";

export const AddItems = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.preventDefault();

    // dispatch(addItems(inputValue));
    dispatch(addAsync(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <h2>Add Items</h2>
      <form onSubmit={handleAddItem}>
        <label>Item:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
