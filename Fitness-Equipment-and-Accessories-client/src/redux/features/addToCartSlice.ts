import { createSlice } from "@reduxjs/toolkit";

const TInitialType = { name: "", image: "", _id: "", category: "" };

type TCart = {
  name: string;
  image: string;
  _id: string;
  category: string;
};

type TInitialState = {
  carts: TCart[];
};
const initialState: TCart = {
  carts: [],
};

export const addToCartSlice = createSlice({
  name: "addCart",
  initialState,
  reducers: {
    addToCart: (state: TState[], action) => {
      const selectedProduct = action.payload;
      state.push(selectedProduct);

      //   state.name = selectedProduct.name;
      //   state.image = selectedProduct.image;
      //   state._id = selectedProduct._id;
      //   state.category = selectedProduct.category;
    },
  },
});

export const { addToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
