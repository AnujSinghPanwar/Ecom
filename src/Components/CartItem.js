import React from "react";
import { useDispatch } from "react-redux";
import {
  IncrementQty,
  DecrementQty,
  DeleteCartItem,
} from "../redux/reducers/cartReducer";

const CartItem = ({ cartPro }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <img src={cartPro.image} style={{ height: "6rem" }} />
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
          onClick={() => dispatch(DecrementQty(cartPro.id))}
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
      <td>
        <button
          className="btn btn-danger ms-2"
          onClick={() => dispatch(DeleteCartItem(cartPro.id))}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
