import './App.css';
import Card from "./Card.js";
import sedan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {

  const cars = [{
    type: "Sedans",
    description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    background_color: "hsl(31, 77%, 52%)"
  }, {
    type: "SUVs",
    description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    background_color: "hsl(184, 100%, 22%)"
  }, {
    type: "Luxury",
    description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    background_color: "hsl(179, 100%, 13%)"
  }]

  console.log(cars[1].svg_path)
  return (
    <section className="card_holder">
      <Card
      svg={sedan}
      type={cars[0].type}
      description={cars[0].description}
      background_color={cars[0].background_color}
      />
      <Card
      svg={suv}
      type={cars[1].type}
      description={cars[1].description}
      background_color={cars[1].background_color}
      />
      <Card
      svg={luxury}
      type={cars[2].type}
      description={cars[2].description}
      background_color={cars[2].background_color}
      />
    </section>
  );
}

export default App;
