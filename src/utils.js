export const countPotionsColors = (potionsArr, colors) => {
  potionsArr.forEach((potion) => {
    colors[potion] += 1;
  });
};

export const getCombinations = (stock) => {
  const colors = ["red", "blue", "green", "yellow", "grey"];

  const attack = [];

  for (let i = 0; i < colors.length; i++) {
    let potion = stock[colors[i]];
    if (potion > 0) {
      attack.push(colors[i]);
    }
  }
  console.log("attack", attack);
};
