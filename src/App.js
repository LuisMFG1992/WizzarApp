import "./App.css";
import { countPotionsColors, getCombinations } from "./utils";

function App() {
  const potions = ["blue", "green", "red", "blue", "green", "yellow", "grey"];

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

  getCombinations(potionsStock);

  return <div className="App">Hello World</div>;
}

export default App;
