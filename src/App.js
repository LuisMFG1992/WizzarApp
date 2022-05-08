import "./App.css";
import { testCases } from "./components/testing/test";
import {
  calculateDamage,
  countPotionsColors,
  getBestCombinations,
} from "./utils";

function App() {
  const potions = [
    "red",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "yellow",
    "yellow",
    "yellow",
    "yellow",
    "grey",
    "grey",
    "grey",
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

  let bestCombination = {
    attacks: [],
    totalDamage: 0,
  };

  countPotionsColors(potions, potionsStock);

  const result = getBestCombinations(potionsStock, bestCombination);
  return <div className="App">Hello Worl</div>;
}

export default App;
