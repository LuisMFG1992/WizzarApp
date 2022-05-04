import "./App.css";
import { countPotionsColors, getCombinations } from "./utils";

function App() {
  const potions = [
    "red",
    "blue",
    "blue",
    "blue",
    "green",
    "yellow",
    "yellow",
    "grey",
    "grey",
  ];

  const stock = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    grey: 0,
  };

  const potionsStock = { ...stock };

  countPotionsColors(potions, potionsStock);

  getCombinations(potionsStock);

  return <div className="App">Hello World</div>;
}

export default App;
