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
    console.log(a + b);
  },
  sub: function (a, b) {
    console.log(a - b);
  },
  mul: function (a, b) {
    console.log(a * b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  pow: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(2, 5);
calculator.sub(2, 5);
calculator.mul(2, 5);
calculator.div(2, 5);
calculator.pow(2, 5);
