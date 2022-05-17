//const player = ["nico", 121212, false, "little bit"];

// Object
const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

//player = false;

player.lastName = "potato";
player.points += 15;
console.log(player);

// Function
console.log("Hello my name is Nico");

function sayHello(nameOfPerson, age) {
  console.log(
    "Hello my name is " + nameOfPerson + " and I'm " + age + " years old."
  );
}

alert();
console.log();
sayHello("nico", 10);
sayHello("dal", 15);
sayHello("lee", 20);
sayHello("lynn", 22);
