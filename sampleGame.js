console.log("----------LUCKY DRAW-----------\n");
console.log("HERE IS A LOTTERY GAME, ENTER A LUCKY NUMBER WIN THE LOTTERY\n");
const userOpinion = confirm("IF YOU FEEL INTERESTING CLICK Y OTHERWISE N");

function isRowEnd(i) {
  if (i % 3 === 0) {
    return "|\n|" + repeat("-", 14) + "|\n";
  }
  
  return "";  
}

function getBox(userNum, giftIndex, gift) {
  let box = "";
  let i = 1;
  
  for(i; i <= 9; i++) {
    box = box + "| 🎁 " + isRowEnd(i);

    if (i === userNum) {
      box[giftIndex] = gift;
    }
  }
  return box;
}

function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
    return "";
  }
  return string + repeat(string, noOfTimes - 1);
}

function getGiftIndex(userNum) {
  console.log(userNum);
  switch(userNum) {
    case 1: 
      return 2; 
    case 2: 
      return 6;
    case 3: 
      return 10;
    case 4: 
      return 33;
    case 5: 
      return 37;
    case 6: 
      return 41;
    case 7: 
      return 64;
    case 8: 
      return 68;
    case 9: 
      return 72;
  }
}

function getGift(userNum, gift) {
  console.log(userNum);
  // const giftIndex = getGiftIndex(userNum);
  // console.log(giftIndex);
  console.log("|" + repeat("-", 14) + "|\n" + getBox(userNum, giftIndex, gift));
}

function lottery(userChances, userNum, luckyNum) {
  let giftedBox = "";
  if (userChances === 0) {
    return "BETTER LUCK NEXT TIME🙃"; 
  }

  if (userNum === luckyNum) {
    giftedBox = getGift(userNum, "🧸");
    return giftedBox;
  }

  console.log(getGift(userNum, "👎"));

  userNum =prompt("ENTER A NUMBER");
  luckyNum = Math.round(Math.random() * 3);

  return lottery(userChances -1, userNum) 
}

if (userOpinion) {
  const userName = prompt("ENTER YOUR NAME");

  console.log(userName + " YOU HAVE ONLY 3 CHANCES TO TRY")
  console.log("HOPE YOU WILL WIN THE LOTTERY");
  
  const userNum =prompt("ENTER A NUMBER");
  const luckyNum = Math.round(Math.random() * 10);
  console.log(lottery(3, userNum, luckyNum));
}

  console.log("ITS OK BYE");   

































// function lottery(userNum, lotteryNum) {
//   const isMatched = userNum === lotteryNum;
//   console.log(isMatched);
//   const resultBox = isMatched ? getGiftedBox() : getBox() ;
//   console.log("|" + repeat("-", 14) + "|\n" + resultBox);
// }



// function decideUserStatus(userChances) { 
  

//   const userNum = 5;
//   const lotteryNum = 5;

//   if (userNum === lotteryNum) {
//     console.log("congratulations you won the lottery");
//     return lottery(userNum, lotteryNum);
//   }

//   const chancesLeft = userChances - 1;
//   let message = "OOPS! IT'S EMPTY. BUT STILL YOU HAVE ";
//   message = message + chancesLeft + " more chances";
//   console.log(message);

//   return decideUserStatus(userChances - 1);
// }

// console.log(lottery(-1, 0));
// console.log(decideUserStatus(3));


// let userChances = 1;

// function decideUserStatus() {
//   if (isUserNum)
// }

// while (userChances < 3) {
//   if (userNum !== lotteryNum) {
    
//     console.log(lottery(userNum, lotteryNum)); 
//   } 
//   chances = 4; 
//   console.log(isNumberMatched(3)); 
// }
