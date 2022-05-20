export const countPotionsColors = (potionsArr, colors) => {
  potionsArr.forEach((potion) => {
    colors[potion] += 1;
  });
  return;
};

export const getBestCombinations = (stock) => {
  let bestCombination = {
    attacks: [],
    totalDamage: 0,
  };
  const attacks = [];

  getAttacks(stock, attacks, bestCombination);

  return bestCombination;
};

const getAttacks = (stock, attacksArr, bestCombination) => {
  const colors = ["red", "blue", "green", "yellow", "grey"];

  //TODO: Maybe counting total potions and creating a conditional of (total & 8 === 0)
  //TODO: i can do something with the 4x4 case.

  let totalAttacks = Math.max(...Object.values(stock));
  const objAttack = {
    potions: [],
    damage: 0,
  };

  for (let i = 0; i <= 5; i++) {
    let color = colors[i];
    let quantity = stock[color];
    let combinationArr = objAttack.potions;
    if (quantity > 0) {
      combinationArr.push(color);
      stock[color] -= 1;
    }
  }

  let attackLength = objAttack.potions.length;

  //In case of 2 elements array this conditional will split and push them directly to my global obj.
  if (attackLength === 2) {
    let combinations = objAttack.potions;
    combinations.forEach((potion) => {
      let singleAttackObj = {
        potions: [potion],
        damage: 3,
      };
      bestCombination.totalDamage += 3;
      bestCombination.attacks.push(singleAttackObj);
    });
  }

  const ATTACK_PERCENTAGE = {
    5: 25,
    4: 20,
    3: 10,
    2: 5,
    1: 3,
  };

  let attackPercentage = ATTACK_PERCENTAGE[attackLength];

  if (attackLength !== 2) {
    objAttack.damage = attackPercentage;

    bestCombination.totalDamage += attackPercentage;

    bestCombination.attacks.push(objAttack);
  }

  if (totalAttacks > 1) {
    getAttacks(stock, attacksArr, bestCombination);
  }
};
