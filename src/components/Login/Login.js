import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1 className="login__heading">Sign In</h1>
        <strong>E-Mail</strong>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Your Email"
        />
        <strong>Password</strong>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Your Password"
        />

        <button className="login__btn" onClick={signIn} type="submit">
          Sign In
        </button>

        <p className="login__license">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia illo
          omnis voluptatibus sunt? Sed inventore iure voluptatem quia tenetur
          repellendus!
        </p>
        <button className="login__signupBtn" onClick={signUp} type="submit">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
