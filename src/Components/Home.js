import React from "react";
import Corsoul from "./Corsoul";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const data = useSelector((state) => state.Product.AllProduct);
  console.log(data);
  return (
    <>
      <Corsoul />
      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          {data.map((product, i) => (
            <Product product={product} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

// {data.map((product, i) => (
//   <Product product={product} key={i} />
// ))}
