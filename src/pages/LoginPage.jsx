import React from "react";
import group from "../assets/Group.svg";
import { Mail } from "lucide-react";
import { KeyRound } from "lucide-react";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  //   const navigate = useNavigate();
  return (
    <div className="all">
      <div className="group">
        <img src={group} />
        <h1>Hard</h1>
      </div>
      <div className="login-page">
        <div className="container" style={{ width: "300px" }}>
          <div
            className="hello"
            style={{
              width: "100%",
              height: "50%",
            }}
          >
            <h2>Hello!</h2>
            <p>Sign up to Get Started</p>
          </div>
          <div
            className="inputs"
            style={{
              width: "100%",
              height: "50%",
            }}
          >
            <div className="mail">
              <Mail />
              <input type="email" placeholder="Email Adress"></input>
            </div>
            <div className="password">
              <KeyRound />
              <input type="password" placeholder="Password"></input>
            </div>
            <button className="button-login">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
