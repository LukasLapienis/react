import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "../features/shoppingListSlice";

export const store = configureStore({ reducer: shoppingListReducer });
