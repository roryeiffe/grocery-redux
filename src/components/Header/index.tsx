import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">Hello, Grocery People!</h1>
      <p className="lead">
        Welcome to grocery store, your one stop shop for all your daily
        essentials
      </p>
      <hr className="my-4" />
      <Link className="btn btn-primary btn-lg" to= 'product/1'>
        Start Shopping
      </Link>
    </div>
  );
};

export default Header;
