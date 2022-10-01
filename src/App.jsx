import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import CardData from "./CardData";

function App() {
  const [count, setCount] = useState(0);

  const cards = CardData.map((y) => {
    return (
      <Card
        openSpots={y.openSpots}
        img={y.coverImg}
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
      <div className="cards-list">{cards}</div>
    </div>
  );
}

export default App;
