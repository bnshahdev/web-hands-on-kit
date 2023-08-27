import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

console.log("cartSlice..", cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
