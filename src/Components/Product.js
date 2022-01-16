import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart } from "../redux/reducers/cartReducer";

const AllProducts = ({ product }) => {
  const { title, id, price, image } = product;
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100 text-center p-4">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title mb-0">{title.substring(0, 12)}...</h5>
            <p className="card-text lead fw-bold">${price}</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <Link
                className="btn btn-outline-dark mt-auto"
                to={`/proDetail/${id}`}
                style={{ fontFamily: "Spectral SC" }}
              >
                View Detail
              </Link>
              <button
                className="btn btn-outline-dark mt-auto"
                style={{ fontFamily: "Spectral SC" }}
                onClick={() => dispatch(AddToCart(product))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
