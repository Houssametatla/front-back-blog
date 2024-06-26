import React from "react";
import Group from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
export default function LogoComponent() {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <img
        src={Group}
        onClick={() => navigate("/main")}
        className="app-logo"
        alt="logo"
      />
      <p>Hard</p>
    </div>
  );
}
