import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

const initialState = {
  AllProduct: data,
  SingleProduct: [],
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    FindProduct: (state, action) => {
      state.SingleProduct = state.AllProduct.find(
        (std) => std.id == action.payload
      );
    },
    ClearProduct: (state) => {
      state.SingleProduct = {};
    },
  },
});

export const { FindProduct,ClearProduct } = productReducer.actions;
export default productReducer.reducer;

// import { createReducer } from "@reduxjs/toolkit";
// import {
//   addToCart,
//   clearProduct,
//   findProduct,
// } from "../actions/productActions";

// const initialState = {

//   singleProduct: {},
// };

// const productReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(findProduct, (state, action) => {
//       state.singleProduct = state.product.find(
//         (pro) => pro.id == action.payload
//       );
//     })
//     .addCase(clearProduct, (state) => {
//       state.singleProduct = {};
//     });
// });

// export default productReducer;
