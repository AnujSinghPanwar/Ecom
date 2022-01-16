import React from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { useDispatch } from "react-redux";
import {
  IncrementQty,
  DecrementQty,
  DeleteCartItem,
} from "../redux/reducers/cartReducer";

const Cart = () => {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.Cart.cartItems);

  const addition = (acc, currentValue) => {
    return acc + currentValue.price * currentValue.quantity;
  };
  const total = CartItems.reduce(addition, 0);

  return (
    <section className="cartContainer mt-5 py-5">
      {CartItems < 1 ? (
        <div className="cart">
          <h1 className="cartHeader">
            <i className="bi bi-emoji-frown-fill"></i>
          </h1>
          <h1 className="cartHeader">No Items Yet.......Thanks</h1>
        </div>
      ) : (
        <>
          <div className="py-5 container">
            <div className="row ">
              <div className="col-12">
                <h6> Cart(0) Items</h6>
                <table className="table table-light table-hover mt-5">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Amount</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>X</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartItems.map((cartPro) => (
                      <tr key={cartPro.id}>
                        <td>
                          <img src={cartPro.image} alt={cartPro.title} style={{ height: "6rem" }} />
                        </td>
                        <td>{cartPro.title}</td>
                        <td>
                          <b>₹</b>
                          {cartPro.price}
                        </td>
                        {/* <td>{cartPro.quantity}</td> */}
                        <td>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              if (cartPro.quantity > 1) {
                                dispatch(DecrementQty(cartPro.id));
                              } else {
                                dispatch(DeleteCartItem(cartPro.id));
                              }
                            }}
                          >
                            -
                          </button>
                          <span>{cartPro.quantity}</span>
                          <button
                            className="btn btn-success ms-2"
                            onClick={() => dispatch(IncrementQty(cartPro.id))}
                          >
                            +
                          </button>
                        </td>
                        <td>{cartPro.price * cartPro.quantity}</td>
                        <td>
                          <i
                            onClick={() => dispatch(DeleteCartItem(cartPro.id))}
                            class="bi bi-x-circle"
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-auto ms-auto">
                <h3>Total Price: {total}</h3>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;

// console.log(CartItems)
// const cartCount = 0;

// CartItems.forEach((e) => {
//   const cart = e.quantity;
//   cartCount = cartCount + cart;
// });
