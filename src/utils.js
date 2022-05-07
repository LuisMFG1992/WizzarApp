export const countPotionsColors = (potionsArr, colors) => {
  potionsArr.forEach((potion) => {
    colors[potion] += 1;
  });
  return;
};

export const getBestCombinations = (stock, bestCombination) => {
  const colors = ["red", "blue", "green", "yellow", "grey"];
  const attacks = [];

  getAttacks(stock, colors, attacks, bestCombination);

  return attacks;
};

const getAttacks = (stock, colorArr, attacksArr, bestCombination) => {
  let totalAttacks = Math.max(...Object.values(stock));

  const objAttack = {
    potions: [],
    damage: 0,
  };

  for (let i = 0; i <= 5; i++) {
    let color = colorArr[i];
    let quantity = stock[color];
    if (quantity > 0) {
      objAttack.potions.push(color);
      stock[color] -= 1;
    } else {
      delete stock[colorArr[i]];
    }
  }

  let attackLength = objAttack.potions.length;

  let attackPercentage;

  switch (attackLength) {
    case 5:
      attackPercentage = 25;
      break;
    case 4:
      attackPercentage = 20;
      break;
    case 3:
      attackPercentage = 10;
      break;
    case 2:
      attackPercentage = 5;
      break;
    default:
      attackPercentage = 3;
      break;
  }

  objAttack.damage = attackPercentage;

  bestCombination.totalDamage += attackPercentage;

  bestCombination.attacks.push(objAttack);

  if (totalAttacks > 0) {
    getAttacks(stock, colorArr, attacksArr, bestCombination);
  }
};
