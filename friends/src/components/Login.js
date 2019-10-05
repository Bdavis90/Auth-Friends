import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function Login(props) {
  const [user, setUser] = useState({
    credentials: { username: "", password: "" }
  });

  function handleChange(e) {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  }

  function login(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", user.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch(err => console.error(err));
  }

  return (
    <form className="login-form" onSubmit={login}>
      <label htmlFor="username">
        Username
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.credentials.username}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.credentials.password}
        />
      </label>
      <button>Login</button>
    </form>
  );
}

export default Login;
