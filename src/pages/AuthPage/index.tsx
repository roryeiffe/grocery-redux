import { useState } from "react";
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
          <p onClick={() => setShowLogin(false)}>
            New user? Click here to register!
          </p>
        </div>
      )}
      {!showLogin && (
        <div>
          <Register />
          <p onClick={() => setShowLogin(true)}>
            Returning user? Click here to log in!
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AuthPage;
