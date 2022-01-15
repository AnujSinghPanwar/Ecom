import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
// import { removeFromCart } from "../redux/actions/cartAction";

const CartList = () => {
  const data = useSelector((state) => state.cart.cartItems);
  // const dispatch = useDispatch();

  // const removeItem = (id) => {
  //   dispatch(removeFromCart(id));
  // };
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
              <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                <h2 className="py-4 font-weight-bold">Cart ({data.length})</h2>
                {data.map((prod, i) => (
                  <div key={i} className="card p-4" >
                    <div  className="row">
                      <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                        <img
                          src={prod.image}
                          className="img-fluid"
                          alt="Image"
                        />
                      </div>
                      {/* cart product details */}
                      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div className="row">
                          <div className="col-6 cart-title">
                            <h2 className="mb-4 product_name">{prod.title}</h2>
                            <p className="mb-2">{React}</p>
                            <p className="mb-2">Anuj Panwar</p>
                            <p className="mb-3">Mca</p>
                          </div>

                          <div className="col-6">
                            <ul className="pagination justify-content-end set_quantity">
                              <li className="page-item">
                                <button className="page-link" href="#">
                                  <i className="bi bi-dash"></i>
                                </button>
                              </li>
                              <li className="page-item">
                                {/* <input
                                  type="text"
                                  className="page-link"
                                  value="1"
                                /> */}
                              </li>
                              <li className="page-item">
                                <button className="page-link" href="#">
                                  <i className="bi bi-plus"></i>
                                </button>
                              </li>
                            </ul>
                          </div>

                          <div className="row">
                            <div className="col-8 d-flex justify-content-between remove_wish">
                              <p className="">
                                <i
                                  className="bi bi-trash-fill"
                                  // onClick={() => removeItem(prod.id)}
                                ></i>
                              </p>
                              <p className="">
                                <i className="bi bi-heart-fill"></i> Move To
                                Wishlist
                              </p>
                            </div>
                            <div className="col-4 d-flex justify-content-end price_money">
                              <h5>
                                <span id="itemval">₹{prod.price}</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* right side */}
              <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="right-side p-3 shadow bg-white">
                  <h2 className="product_name mb-5">The Total Amount of </h2>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Product Name</p>
                    <p>
                      #<span>199</span>
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      #<span>15</span>
                    </p>
                  </div>
                  <hr />
                  <div className="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount of (including VAT)</p>
                    <p>
                      ₹<span id="total_cart_amt">0</span>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between font-weight-bold">
                    {/* <button className="btn btn-danger text-uppercase">
                      All Clear
                    </button> */}
                    <button className="btn btn-primary text-uppercase">
                      Checkout
                    </button>
                  </div>
                </div>

                {/* discount code */}
                <div className="discount_code mt-3 shadow">
                  <div className="card">
                    <div className="card-body">
                      <a
                        className="d-flex justify-content-between"
                        data-toggle="collapse"
                        href="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Add Discount Code(optional)
                        <span>
                          <i className="bi bi-caret-down-fill mt-1"></i>
                        </span>
                      </a>
                      <div className="collapse" id="collapseExample">
                        <div className="mt-3">
                          <input
                            type="text"
                            name=""
                            id="discount_code"
                            className="form-control font-weight-bold"
                            placeholder="Code"
                          />
                          <small id="error_trw" className="text-dark mt-3">
                            Code Area
                          </small>
                        </div>
                        <button className="btn btn-primary btn-sm mt-3">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
