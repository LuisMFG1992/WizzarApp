export const countPotionsColors = (potionsArr, colors) => {
  potionsArr.forEach((potion) => {
    colors[potion] += 1;
  });
  return;
};

export const getCombinations = (stock) => {
  const copyStock = { ...stock };
  const colors = ["red", "blue", "green", "yellow", "grey"];
  const attacks = [];
  const attack = [];

  outterFor(copyStock, colors, attacks, attack);
};

const outterFor = (copystock, colorArr, attacksArr, singleAttackArr) => {
  let totalAttacks = Math.max(...Object.values(copystock));

  for (let i = 0; i < colorArr.length; i++) {
    let cantidad = copystock[colorArr[i]];
    if (cantidad > 0) {
      let color = colorArr[i];
      singleAttackArr.push(color);
      copystock[color] -= 1;
    } else {
      delete copystock[colorArr[i]];
      totalAttacks -= 1;
    }
  }
  attacksArr.push(singleAttackArr);
  console.log("attacksArr: ", attacksArr);

  // toDo: Por alguna razon en la se me daña el aray cuando llamo a innerFor la 2da vez

  // if (totalAttacks > 0) {
  //   outterFor(copystock, colorArr, attacksArr, singleAttackArr);
  // } else {
  //   console.log("Se usaron todas las posiones.");
  // }
};

//BACK UP
// export const getCombinations = (stock) => {
//   const colors = ["red", "blue", "green", "yellow", "grey"];
//   const copyStock = { ...stock };
//   let totalAttacks = Math.max(...Object.values(stock));

//   const attacks = [];
//   const attack = [];

//   for (let i = 0; i < colors.length; i++) {
//     let potion = copyStock[colors[i]];
//     if (potion > 0) {
//       attack.push(colors[i]);
//       copyStock[colors[i]] -= 1;
//     } else {
//       delete copyStock[colors[i]];
//     }
//   }
//   attacks.push(attack);

//   console.log("stock: ", stock);
//   console.log("copyStock:", copyStock);
//   console.log("attacks: ", attacks);
// };
