let username = "my name";
let bonusBalance = 1000;
let bonusPlus = 50;
let bonusMinus = 3;
let daysCount = 7;
let step = 2
let finalBonusCount = bonusBalance + (Math.floor(daysCount / step) * bonusPlus) - (bonusMinus * daysCount);
console.log(`Пользователь ${username}`);
console.log(`Баланс ${bonusBalance}`);
console.log(`Баланс на конец недели: ${finalBonusCount}`);