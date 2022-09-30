import React from "react";
import PhotoGrid from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero--container">
      <img className="hero--photogrid" src={PhotoGrid} />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--sub">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
