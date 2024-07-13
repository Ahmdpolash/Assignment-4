import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type TAddtoCart = {
  _id: string;
  name: string;
  image: string;
  price: number;
  stock?: number;
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
        state.carts.push({ ...action.payload, quantity: 1 });
        toast.success("add to cart successfully");
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
    incrementQuantity: (state, action) => {
      const product = state.carts.find((item) => {
        console.log(item._id);
        item._id == action.payload.id;
      });
      console.log(product, action.payload);

      if (product) {
        product.quantity++;
        // state.carts.push(product);
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.carts.find((item) => item._id == action.payload.id);
      if (product) {
        console.log(product);
        product.quantity--;
        state.carts.push(product);
      }
    },
  },
});

export const {
  addCart,
  removeItem,
  clearCart,
  loadCart,
  incrementQuantity,
  decrementQuantity,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
