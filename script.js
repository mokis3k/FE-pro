firstNum = +prompt(`Enter first number`);
secondNum = +prompt(`Enter second number`);

firstNum = firstNum.toFixed(2);
secondNum = secondNum.toFixed(2);

randomValue = (Math.random() * (secondNum - firstNum) + firstNum);
randomValue = +randomValue;
console.log(randomValue)
