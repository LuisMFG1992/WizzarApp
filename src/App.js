import "./App.css";
import { testCases } from "./components/testing/test";
import { countPotionsColors, getBestCombinations } from "./utils";

function App() {
  // const potions = [
  //   "red", //1
  //   "blue", //2
  //   "blue", //3
  //   "green", //4
  //   "green", //5
  //   "green", //6
  //   "yellow", //7
  //   "yellow", //8
  //   "yellow", //9
  //   "yellow", //10
  //   "grey", //11
  //   "grey", //12
  //   "grey", //13
  //   "grey", //14
  //   "grey", //15
  // ];
  const potions = [
    "red", //1
    "red", //1
    "blue", //2
    "blue", //3
    "green", //4
    "green", //5
    "yellow", //7
    "yellow", //8
    "grey", //11
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

  const result = getBestCombinations(potionsStock);
  console.log("result: ", result);
  console.log(testCases());
  return <div className="App">Hello World</div>;
}

export default App;
