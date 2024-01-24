import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import "./index.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handelLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handelSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <>
      <Nav handelLoginClick={handelLoginClick} handelSignup={handelSignup} />
      {showLogin && <Login />}
      {showSignup && <Signup />}
    </>
  );
}

export default App;
