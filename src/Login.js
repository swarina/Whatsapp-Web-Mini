import React from "react";

//CSS
import "./Login.css";

//Material-UI
import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {};

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://user-images.githubusercontent.com/56193323/129486802-806ebdce-499c-40a8-8473-3e9cdfe916ad.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
