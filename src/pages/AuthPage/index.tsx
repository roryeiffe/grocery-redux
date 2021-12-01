import React, { useState } from "react";
import Footer from "../../components/Footer";
import Login from "../../components/Login";
import Register from "../../components/Register";
import Navbar from "../../components/Navbar";
import './style.css';

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <Navbar />
      {showLogin && (
        <div>
          <Login />
          <a onClick={() => setShowLogin(false)}>
            New user? Click here to register!
          </a>
        </div>
      )}
      {!showLogin && (
        <div>
          <Register />
          <a onClick={() => setShowLogin(true)}>
            Returning user? Click here to log in!
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AuthPage;
