import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer js bhind the seen
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state))
      state.items.length = 0;

      // or we can do another way
      //  return {items:[]}  //this new [] will be replaced inside originalState = {items:[]}

      // don't do below this thing
      // state =[] --> it's not actually mutating the state , it's giving different reference
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
