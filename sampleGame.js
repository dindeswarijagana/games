console.log("-----------------------LUCKY DRAW-----------\n");
console.log("HERE IS A LOTTERY GAME, ENTER A LUCKY NUMBER WIN THE LOTTERY\n");
const userOpinion = confirm("IF YOU FEEL INTERESTING CLICK Y OTHERWISE N");

function isRowEnd(i) {
  if (i % 3 === 0) {
    return "|\n|" + repeat("-", 14) + "|\n";
  }
  
  return "";  
}

function getBox(userNum, gift) {
  let box = "";
  let i = 1;
  
  for(i; i <= 9; i++) {
    let emoji = '| 🎁 ';
    if (i === userNum) {
      emoji = gift;
    }
    box = box + emoji + isRowEnd(i);
  }
  return box;
}

function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
    return "";
  }
  return string + repeat(string, noOfTimes - 1);
}

function getGift(userNum, gift) {
  const userGift = "|" + repeat("-", 14) + "|\n" + getBox(userNum, gift);
  return userGift;
}

function startGame(userName){
  console.log(lottery(3, userName));
}

function lottery(userChances, userName) {
  if (userChances === 0) {
    return "BETTER LUCK NEXT TIME🙃 "; 
  }
  
  const userNum = +(prompt("ENTER A NUMBER"));
  const luckyNum = Math.round(Math.random() * 10);
  
  if (userNum === luckyNum) {
    console.log(getGift(userNum, '| 🧸 '));
    return "CONGRATULATIONS" + userName + "YOU GOT A TEDDY";  
  }

  console.log(getGift(userNum, '| 👎 '));
  console.log("OOPS! ITS AN EMPTY BOX, TRY ONCE MORE");
  return lottery(userChances -1, userNum, luckyNum);
}

if (userOpinion) {
  const userName = prompt("ENTER YOUR NAME");
  console.log(userName + " YOU HAVE ONLY 3 CHANCES TO TRY");

  console.log( '\n\n' + getGift(0, ''));
  console.log("HOPE YOU WILL WIN THE LOTTERY");
  startGame(userName);
  
}

console.log("OK BYE!");   
