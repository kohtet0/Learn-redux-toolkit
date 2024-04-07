import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";

const initialState = {
  numOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderedIcecream: (state) => {
      state.numOfIceCreams--;
    },
    restock: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIceCream--
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default icecreamSlice.reducer;
export const { orderedIcecream, restock } = icecreamSlice.actions;
