import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import CardData from "./CardData";

function App() {
  const [count, setCount] = useState(0);

  const cards = CardData.map((item) => {
    return <Card key={item.id} item={item} />;
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
