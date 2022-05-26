function plus(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 16);
plus(8, 60);
divide(60, 8);
divide(98, 20);

//

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName);
  },
};

console.log(player.name);
player.sayHello();
player.sayHello("lynn");

//

const player2 = {
  name: "Lee",
  age: 25,
};

console.log((player2.name = "Sang"));
console.log(player2["name"]);
console.log(player2.age);
console.log(player2, console);

player2.gender = "male";
console.log(player2);

//

function plus2(a, b) {
  console.log(a + b);
}

plus2(5, 9);
plus2(5, 9, 12, -99, 34353435);

//

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  pow: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.add(2, 5));
console.log(calculator.sub(2, 5));
console.log(calculator.mul(2, 5));
console.log(calculator.div(2, 5));
console.log(calculator.pow(2, 5));

const plusResult = calculator.add(2, 5);
const minusResult = calculator.sub(plusResult, 10);
const timesResult = calculator.mul(10, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);

//

const age2 = 50;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age2);

console.log(KrAge);

//
/*
const yourAge = prompt("How old are you?");

console.log(yourAge);
console.log(typeof yourAge);
console.log(typeof parseInt(yourAge));
console.log(yourAge, parseInt(yourAge));
*/
//

const age = parseInt(prompt("How old are you?"));

//console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young");
} else {
  //console.log(`Thank you. Your age is ${yourAge2}`);
  console.log("You can drink.");
}
