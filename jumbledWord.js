function getJumbleWord(wordNumber) {
  switch (wordNumber) {
    case 1: return "PPARE";
    case 2: return "SSTESR";
    case 3: return "NEXOTTC";
    case 4: return "RRVPBOE";
    case 5: return "MARED";
  }
}

function getActualWord(wordNumber) {
  switch (wordNumber) {
    case 1: return "PAPER";
    case 2: return "STRESS";
    case 3: return "CONTEXT";
    case 4: return "PROVERB";
    case 5: return "DREAM";
  }
}

function decideWordToReveal(i, index, blanks, actualWord) {
  const wordToReveal = i === index ? actualWord[i] : blanks[i];
  return wordToReveal;
}

function getWordToReveal(index, wordLength, blanks, actualWord) {
  let wordString = "";
  for (let i = 0; i < wordLength; i++) {
    wordString = wordString + decideWordToReveal(i, index, blanks, actualWord);
  }

  return wordString;
}

function getUserOpinion() {
  return confirm("DO YOU WANT CLUE? ");
}

function displayCurrentStatus(score, blanks) {
  console.log(blanks + "                        CURRENT SCORE:", score + "\n");
}

function giveScore(actualWord, blanks, score, index) {
  displayCurrentStatus(score, blanks);
  const userWord = prompt("ENTER THE WORD:");

  if (userWord === actualWord) {
    return score + 10;
  }

  console.log("❌ YOU LOST 3 MARKS FOR WRONG ARRANGEMENT\n");

  if (getUserOpinion()) {
    score += -2;
    blanks = getWordToReveal(index, actualWord.length, blanks, actualWord);
  }

  return giveScore(actualWord, blanks, score - 3, index + 1);
}

function displayFinalMessage(totalScore) {
  let message = "AWSOME!😇" + userName + " YOU ARRANGED IT CORRECTLY\n";
  message = message + "\nYOUR TOTAL SCORE IS:" + totalScore + "\n";

  return message;
}

function displayJumbleWord(jumbleWord) {
  console.log("ARRANGE THE WORD-------------->  " + '"' + jumbleWord + '"\n');
}

function getBlanks(wordLength) {
  if (wordLength === 0) {
    return "";
  }

  return "_" + getBlanks(wordLength - 1);
}

function startGame(wordNumber) {
  const jumbleWord = getJumbleWord(wordNumber);
  const actualWord = getActualWord(wordNumber);
  const blanks = getBlanks(actualWord.length);

  displayJumbleWord(jumbleWord);
  const score = giveScore(actualWord, blanks, 0, 0);

  return displayFinalMessage(score);
}

const userName = prompt("enter your Name");
const wordNumber = Math.floor(Math.random() * 6);

console.log(startGame(wordNumber));
