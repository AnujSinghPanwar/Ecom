import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductDetail, Home, Header,Cart } from "./Components/index";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/proDetail/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
