import React from "react";

// a singular product item, represented by a bootstrap card:
const Product = (props:any) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img
          src={"http://rjtmobile.com/grocery/images/" + props.data.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
            <h2>{props.data.productName}</h2>
          <h3>
            ${props.data.price} <del>${props.data.mrp}</del>
          </h3>
          <h5 className="card-title">{props.data.unit}</h5>
          <p className="card-text">{props.data.description}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
