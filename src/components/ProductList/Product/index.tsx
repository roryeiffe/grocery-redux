import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react';


// a singular product item, represented by a bootstrap card:
const Product = (props:any) => {
  // message letting the user know if they added the item successfully:
  const [message, setMessage] = useState("");
  // Get the cart to see if we already have this item:
  const cart = useSelector((state:any) => state.user.cart);

  const dispatch = useDispatch();

  const addToCart = (product:any) => {
    // set the quantity to 1:
    product.quantity = 1;
    // update the store with this payload, if this is a new product:
    if(!checkInCart(cart, product)){
      dispatch({type: 'ADD_ITEM', payload: product});
      setMessage("Item added successfully!");
    }
    else {
      setMessage("Already have item in cart!");
    }
  }

  // check if the item is in this user's cart:
  const checkInCart = (cart:any, item:any) => {
    for(let item_ of cart) {
      if (item_.productName === item.productName) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="col-lg-4">
      <div className="card">
        <img
          src={"http://rjtmobile.com/grocery/images/" + props.data.image}
          className="card-img-top"
          alt="..."
          height = '200vw'
        />
        <div className="card-body">
            <h2>{props.data.productName}</h2>
          <h3>
            ${props.data.price} <del>${props.data.mrp}</del>
          </h3>
          <h5 className="card-title">{props.data.unit}</h5>
          <p className="card-text">{props.data.description}</p>
          <button className="btn btn-primary" onClick = {() => addToCart(props.data)}>
            Add to Cart
          </button>
          <br />
           {message}
        </div>
      </div>
    </div>
  );
};

export default Product;
