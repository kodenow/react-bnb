import React from "react";
import AirbnbLogo from "../assets/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--icon" src={AirbnbLogo} />
    </nav>
  );
}
