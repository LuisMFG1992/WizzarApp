import "./App.css";
import { countPotionsColors, getCombinations } from "./utils";

function App() {
  const potions = ["red", "blue", "green", "yellow", "grey", "blue"];

  const colors = ["red", "blue", "green", "yellow", "grey"];

  const stock = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    grey: 0,
  };

  countPotionsColors(potions, stock);
  getCombinations(stock);
  console.log(stock);
  return <div className="App">Hello World</div>;
}

export default App;
