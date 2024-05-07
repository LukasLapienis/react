import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { shoppingList: [] };

export const shoppingListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const item = {
        id: new Date().getTime(),
        title: action.payload,
      };
      state.shoppingList.push(item);
    },
    removeItems: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, (state) => {
        console.log("pending");
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        const item = {
          id: new Date().getTime(),
          title: action.payload,
        };

        state.shoppingList.push(item);
      });
  },
});

export const addAsync = createAsyncThunk("asynchronous", async (item) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return item;
});

export const { addItems, removeItems } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
