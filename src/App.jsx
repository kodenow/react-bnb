import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import CardData from "./CardData";

function App() {
  const [count, setCount] = useState(0);

  const x = CardData.map((y) => {
    return (
      <Card
        img="katie-zaferes.png"
        rating={y.stats.rating}
        reviews={y.stats.reviewCount}
        location={y.location}
        title={y.title}
        price={y.price}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      <Hero />
      {x}
    </div>
  );
}

export default App;
