import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Signup.css";
const SignUp = () => {
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        auth.user.updateProfile({
          displayName: fullName,
        });
      })
      .catch((error) => alert(error.message));
    history.push("/");
  };

  return (
    <div className="signUp">
      <Link to="/">
        <img
          className="signUp__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="signUp__container">
        <h1 className="signUp__heading">Sign Up</h1>
        <strong>Full Name</strong>
        <input
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          placeholder="Your Full Name"
        />
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

        <button className="signUp__btn" onClick={signUp} type="submit">
          Sign Up
        </button>
      </div>

      <h2 className="signUp__text">Already a user?</h2>
      <Link to="/login" onClick={signUp} className="login__btn login__link">
        Click here to login
      </Link>
    </div>
  );
};

export default SignUp;
