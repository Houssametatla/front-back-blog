import React from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import LogoComponent from "./logoComponent";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <LogoComponent />
      <div className="login">
        <button className="sign-in">Sign in</button>
        <button onClick={() => navigate("/login")} className="log-in">
          Login
        </button>
      </div>
    </div>
  );
}
