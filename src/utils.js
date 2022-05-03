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

  // Se usa i >= 5 pq siempre seran 5 colores
  for (let i = 0; i <= 5; i++) {
    let color = colorArr[i];
    let quantity = stock[color];
    if (quantity > 0) {
      attack.push(color);
      stock[color] -= 1;
    } else {
      delete stock[colorArr[i]];
      totalAttacks -= 1;
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

  // TODO: Por alguna razon cuando valor de totalAttacks va disminuyendo de 2 en 2 y no acompaña a la propiedad con mayor valor del objeto

  if (totalAttacks > 0) {
    getAttacks(stock, colorArr, attacksArr);
  } else {
    console.log("attacksArr: ", attacksArr);
  }
};
