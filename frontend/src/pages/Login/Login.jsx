import React, { useRef, useState, useEffect } from "react";
import { StyledSignup } from "./Login.styles.jsx";
import Cookies from "js-cookie";

function LoginScreen() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((data) => {
        console.log("Login successful:", data);
        Cookies.set("token", data.token);
        window.location.href = "/search";
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError(error.message);
      });
  };

  return (
    <StyledSignup>
      <form onSubmit={handleSubmit}>
        <div className="form-sect">
          <div className="title">
           <h2>Login</h2>  
          </div>
          {error && (
            <div className="error-container">
              <div className="error-desc">
                <span className="error-marker">&#x26A0;</span> {error}
              </div>
            </div>
          )}
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              ref={usernameRef}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </StyledSignup>
  );
}

export default LoginScreen;
