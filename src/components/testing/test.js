import { getBestCombinations } from "../../utils";

export const testCases = () => {
  let passedCases = 0;
  const stockCaseOne = {
    red: 1,
    blue: 0,
    green: 0,
    yellow: 0,
    grey: 0,
  };
  const res = getBestCombinations(stockCaseOne);

  console.log(res);

  return `Pass ${passedCases}/3 cases`;
};
