import { getBestCombinations } from "../../utils";

export const testCases = () => {
  let passedCases = 0;

  const cases = [
    {
      stock: { red: 1, blue: 0, green: 0, yellow: 0, grey: 0 },
      result: {
        attacks: [
          {
            potions: ["red"],
            damage: 3,
          },
        ],
        totalDamage: 3,
      },
    },

    {
      stock: { red: 1, blue: 0, green: 0, yellow: 0, grey: 0 },
      result: {
        attacks: [
          {
            potions: ["red"],
            damage: 3,
          },
        ],
        totalDamage: 3,
      },
    },
  ];

  let totalCases = cases.length;

  const comparision = (funtionResult, expectedResult) => {
    const sameAttacksLength =
      funtionResult.attacks.length === expectedResult.attacks.length;
    const sameTotalDamage =
      funtionResult.totalDamage === expectedResult.totalDamage;
    if (sameAttacksLength && sameTotalDamage) {
      passedCases++;
      return true;
    }
    return false;
  };

  const test = (cases) => {
    cases.map((element) => {
      const res = getBestCombinations(element.stock);
      return comparision(res, element.result);
    });
    return `Pass ${passedCases}/${totalCases} cases`;
  };

  return "Test: ", test(cases);
};
