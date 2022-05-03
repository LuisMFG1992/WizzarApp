import "./App.css";
import { countPotionsColors, getCombinations } from "./utils";

function App() {
  const potions = ["blue", "green"];

  const stock = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    grey: 0,
  };

  countPotionsColors(potions, stock);

  getCombinations(stock);
  return <div className="App">Hello World</div>;
}

export default App;
