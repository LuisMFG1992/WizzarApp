import "./App.css";
import { testCases } from "./components/testing/test";
import {
  calculateDamage,
  countPotionsColors,
  getBestCombinations,
} from "./utils";

function App() {
  const potions = ["red", "red", "blue", "blue", "green", "yellow", "grey"];

  const stock = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    grey: 0,
  };

  const potionsStock = { ...stock };

  countPotionsColors(potions, potionsStock);

  const attacksArr = getBestCombinations(potionsStock);

  console.log("attacksArr: ", attacksArr);

  const totalDamage = calculateDamage(attacksArr);

  console.log(`Total Damage: ${totalDamage}`);

  console.log(testCases());

  return <div className="App">Hello World</div>;
}

export default App;
