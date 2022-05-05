import "./App.css";
import { calculateDamage, countPotionsColors, getCombinations } from "./utils";

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

  countPotionsColors(potions, potionsStock);

  const attacksArr = getCombinations(potionsStock);

  console.log("attacksArr: ", attacksArr);

  const totalDamage = calculateDamage(attacksArr);

  console.log(`Total Damage: ${totalDamage}`);

  return <div className="App">Hello World</div>;
}

export default App;
