
import {useDispatch} from 'react-redux';

const Item = (props:any) => {


const dispatch = useDispatch();

  // when we increment the quantity of an item:
  const incrementHandler = (productName:string) => {
    dispatch({type: 'INCREMENT_QUANTITY', payload: productName})
  }
  // when we decrement the quantity of an item:
  const decrementHandler = (productName:string) => {
    dispatch({type: 'DECREMENT_QUANTITY', payload: productName})
  }

  const removeHandler = (productName:string) => {
      dispatch({type: 'REMOVE_ITEM', payload: productName})
  }

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
          <h5 className="card-title">{props.data.quantity} in cart</h5>
          <p className="card-text">{props.data.description}</p>
          <br />
          <button onClick = {() => incrementHandler(props.data.productName)} className = "btn btn-success">+</button>
          <button onClick = {() => decrementHandler(props.data.productName)} className = "btn btn-danger">-</button>
          <br/>
          <button onClick = {() => removeHandler(props.data.productName)} className = "btn btn-danger">Remove From Cart</button>
        </div>
      </div>
    </div>
    );
}

export default Item;