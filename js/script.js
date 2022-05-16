const plauyrName = "nico";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

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
