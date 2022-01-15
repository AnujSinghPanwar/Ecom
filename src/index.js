import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
// import store from "./redux/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/font-awesome/css/font-awesome.css";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/reducers/productReducer";
import cartReducer from "./redux/reducers/cartReducer";
// import "bootstrap-icons/font/bootstrap-icons.css";

const store = configureStore({
  reducer: {
    Product: productReducer,
    Cart:cartReducer
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
