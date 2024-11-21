const jumbledWord = "PPARE";
const correctWord = "PAPER";
let message = "";
const opinion = confirm("do you want to play with jumbled words");

if (!opinion) {
  console.log("OK BYE!");
}

const userName = prompt("enter your Name");
const userWord = prompt("ARRANGE THE JUMBLED WORD '" + jumbledWord + "':");

if (userWord === correctWord) {
  message = "CONGRATULATIONS! " + userName + ",you arranged it correctly";
}

console.log(message);  




