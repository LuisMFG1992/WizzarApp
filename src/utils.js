export const countPotionsColors = (potionsArr, colors) => {
  potionsArr.forEach((potion) => {
    colors[potion] += 1;
  });
  return;
};

export const getBestCombinations = (stock) => {
  const colors = ["red", "blue", "green", "yellow", "grey"];
  const attacks = [];
  const bestCombination = {
    attacks: {},
    totalDamage: 0,
  };

  getAttacks(stock, colors, attacks, bestCombination);

  return attacks;
};

const getAttacks = (stock, colorArr, attacksArr, object) => {
  // var bestCombination = {
  //   attacks: [
  //     {
  //       potions: ["red"],
  //       damage: 3
  //     }
  //   ],
  //   totalDamage: 0
  // }

  let totalAttacks = Math.max(...Object.values(stock));
  const attack = [];

  // Se usa i >= 5 pq siempre seran 5 colores.

  for (let i = 0; i <= 5; i++) {
    let color = colorArr[i];
    let quantity = stock[color];
    if (quantity > 0) {
      attack.push(color);
      stock[color] -= 1;
    } else {
      delete stock[colorArr[i]];
    }
  }
  if (attack.length > 2) {
    attacksArr.push(attack);
  } else {
    attack.forEach((value, index) => {
      let spliceArr = attack.slice(index, index + 1);
      attacksArr.push(spliceArr);
    });
  }

  if (totalAttacks > 0) {
    getAttacks(stock, colorArr, attacksArr);
  }
};

export const calculateDamage = (attacksArr) => {
  let countElementsInAttacks = [];

  attacksArr.forEach((element) => {
    let countElements = element.length;
    let attackPercentage;

    switch (countElements) {
      case 5:
        attackPercentage = 25;
        break;
      case 4:
        attackPercentage = 20;
        break;
      case 3:
        attackPercentage = 10;
        break;
      default:
        attackPercentage = 3;
        break;
    }

    countElementsInAttacks.push(attackPercentage);
  });

  let counter = countElementsInAttacks.reduce((a, b) => a + b);
  // console.log("countElementsInAttacks: ", countElementsInAttacks);x
  return counter;
};
