import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type TAddtoCart = {
  _id: string;
  name: string;
  image: string;
  quantity?: number;
};

type TInitialState = {
  carts: TAddtoCart[];
};

const initialState: TInitialState = {
  carts: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<TAddtoCart>) => {
      const isExist = state.carts.find(
        (item) => item._id == action.payload._id
      );
      if (!isExist) {
        state.carts.push({ ...action.payload, quantity: 0 });
        toast.success("add to cart successfully")
      } else {
        toast.error("already added to cart");
      }
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.carts = [];
    },
    loadCart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { addCart, removeItem, clearCart, loadCart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;
