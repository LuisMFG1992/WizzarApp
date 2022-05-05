export const countPotionsColors = (potionsArr, colors) => {
  potionsArr.forEach((potion) => {
    colors[potion] += 1;
  });
  return;
};

export const getCombinations = (stock) => {
  const colors = ["red", "blue", "green", "yellow", "grey"];
  const attacks = [];

  getAttacks(stock, colors, attacks);
};

const getAttacks = (stock, colorArr, attacksArr) => {
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
  } else {
    console.log("attacksArr: ", attacksArr);
  }
};
