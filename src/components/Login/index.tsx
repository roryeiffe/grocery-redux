import axios from "axios";
import React, { useState } from "react";
import './style.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function onChangeHandler(event:any) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmitHandler(event:any) {
      console.log(user);
      event.preventDefault();
      let email = user.email;
      let password = user.password;
      axios.post('https://apolis-grocery.herokuapp.com/api/auth/login',{email,password})
      .then(response => console.log(response))
      .catch(error => console.error(error));
  }

  return (
    <div className = "container">
      <h2>Login</h2>
      <form onSubmit = {onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name = 'email'
            onChange = {onChangeHandler}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name = 'password'
            onChange = {onChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
