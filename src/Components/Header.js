import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const data = useSelector((state) => state.Cart.cartItems);
  // var cartCount = 0;
  // data.forEach((e) => {
  //   const cart = e.cartQuantity;
  //   cartCount = cartCount + cart;
  // });
  return (
    <>
      <nav
        style={{ backgroundColor: "grey" }}
        className="navbar navbar-expand-lg navbar-dark py-3 shadow-sm fixed-top"
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-5" to="/">
            SHOPPING
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="buttons">
              {/* <Link to="/login" className="btn btn-outline-light">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i> Login
              </Link>
              <Link to="/register" className="btn btn-outline-light ms-2">
                <i className="fa fa-shopping-cart"></i> Register
              </Link> */}
              <Link to="/cart" className="btn btn-outline-light ms-2">
                {/* <i className="fa fa-shopping-cart"></i> Cart (0) */}
                <i className="fa fa-shopping-cart"></i> Cart ({data.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
