import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Item from "./Item";

const Cart = () => {
  // initialize cart to be from the redux store:

  const cart = useSelector((state: any) => state.user.cart);

  return (
    <div className="container">
      <div className="row">
        {cart.map((item: any) => (
          <Item key={item.productName} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
