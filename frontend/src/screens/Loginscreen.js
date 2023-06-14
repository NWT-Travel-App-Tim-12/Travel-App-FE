import React, { useState, useContext } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { UserApi } from "../api/userApi";
import { Session } from "../api/sessionStorage";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const value = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function Login() {
    const user = {
      email,
      password,
    };
    try {
      setLoading(true);
      const result = (await UserApi.getUserByEmail(email)).data;
      setLoading(false);
      console.log(result);
      if (result?.length) {
        Session.setUser(result[0]);
        value?.setUser(result[0]);
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="gifs">
      <div className="glass login-page">
        {loading && <Loader />}
        {error && (
          <Error message="Invalid email or password, please try again!" />
        )}
        <center>
          <h2 className="rl">Login</h2>
        </center>
        <input
          type="text"
          placeholder="email"
          className="form"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          className="form"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button className="rlb" onClick={Login}>
          Login
        </button>
        <br /> <br />
        <a className="click-lo-ri" href="/register">
          Click here to Register
        </a>
      </div>
    </div>
  );
}
