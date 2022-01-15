import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ClearProduct, FindProduct } from "../redux/reducers/productReducer";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.Product.SingleProduct);
  console.log(product);
  const { image, rating, category, title, price, description } = product;

  useEffect(() => {
    dispatch(FindProduct(match.params.id));

    return ()=>{
      dispatch(ClearProduct())
    }
  }, []);
  return (
    <div>
      <div className="container  mt-5">
        <div className="row py-5">
          <div className="col-md-6">
            <img src={image} alt={title} height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{category}</h4>
            <h1 className="display-5">{title}</h1>
            <p className="lead">
              rating {rating && rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">${price}</h3>
            <p className="lead">{description}</p>
            <button
              className="btn btn-outline-dark px-5 py-2"
              // onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
            <Link to="/cart" className="btn btn-dark px-5 ms-2 px-3 py-2">
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
