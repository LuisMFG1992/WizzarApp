import "./App.css";
import { countPotionsColors, getCombinations } from "./utils";

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

  // Crear copia del stock aqui y pasarla en como parametro a getCombinations
  // y borrar la copia del objeto en getComnations

  countPotionsColors(potions, potionsStock);

  console.log("potionsStock: ", potionsStock);

  getCombinations(potionsStock);

  return <div className="App">Hello World</div>;
}

export default App;
