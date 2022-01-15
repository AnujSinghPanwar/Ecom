import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const temp = state.cartItems.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (temp >= 0) {
        state.cartItems[temp].quantity += 1;
        toast.info("Already Added", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Product Has Been Added", {
          position: "bottom-left",
        });
      }
    },
    IncrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },
    DecrementQty: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      // return state.cartItems;
    },
    DeleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (pro) => pro.id !== action.payload
      );
    },
  },
});

export const { AddToCart, DecrementQty, IncrementQty, DeleteCartItem } =
  cartReducer.actions;
export default cartReducer.reducer;
// import { createReducer } from "@reduxjs/toolkit";
// import { addToCart, removeFromCart } from "../actions/cartAction";
// import { toast } from "react-toastify";

// const initialState = {
//   cartItems: [],
//   cartTotalAmount: 0,
//   cartTotalQuantity: 0,
// };
// const cartReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addToCart, (state, action) => {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].cartQuantity += 1;
//         toast.info(
//           `Increasd ${state.cartItems[itemIndex].title} Product Quantity`,
//           {
//             position: "bottom-left",
//           }
//         );
//       } else {
//         const tempProduct = { ...action.payload, cartQuantity: 1 };
//         state.cartItems.push(tempProduct);

//         toast.success(`${action.payload.title}`, {
//           position: "bottom-left",
//         });
//       }
//     })
// .addCase(removeFromCart, (state, action) => {
//   state.cartItems = state.cartItems.filter(
//     (itemDel) => itemDel.id !== action.payload
//   );
// });
// });
// export default cartReducer;
// state.cartItems= state.cartItems.filter(
//   (curElement) => curElement.id !== action.payload
// ),
