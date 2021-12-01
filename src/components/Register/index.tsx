import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
    gender: "",
    food: [],
    mobile: ""
  });

  function onChangeHandler(event:any) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function onCheckboxChange(event:any) {
    var array = [];
    var checkboxes = document.querySelectorAll(
      'input[name="' + event.target.name + '"]:checked');
    for (var i = 0; i < checkboxes.length; i++) {
      array.push((checkboxes[i]as HTMLInputElement).value);
    }
    setUser({ ...user, [event.target.name]: array });
  }

  function onSubmitHandler(event:any) {
    event.preventDefault();
    console.log(user);
  }

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mobile</label>
          <input
            className="form-control"
            type="phone"
            name="mobile"
            value={user.mobile}
            onChange={onChangeHandler}
            required
          />
        </div>
        <h5>Gender</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            checked={!user.gender || user.gender === "female"}
            onChange={onChangeHandler}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            checked={user.gender === "male"}
            onChange={onChangeHandler}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="non-binary"
            checked={user.gender === "non-binary"}
            onChange={onChangeHandler}
          />
          <label className="form-check-label">Non-binary</label>
        </div>
        <h5>Pick Your Favorite Foods:</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="food"
            value="meat"
            onChange={onCheckboxChange}
          />
          <label className="form-check-label">Meat</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="food"
            value="fruits/vegetables"
            onChange={onCheckboxChange}
          />
          <label className="form-check-label">Fruits and Vegetables</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="food"
            value="dairy"
            onChange={onCheckboxChange}
          />
          <label className="form-check-label">Dairy</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="food"
            value="grains"
            onChange={onCheckboxChange}
          />
          <label className="form-check-label">Grains</label>
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Register;
