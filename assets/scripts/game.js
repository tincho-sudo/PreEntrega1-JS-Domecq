let state = 0;
let points = 0;
const chk1 = document.getElementById("op1");
const chk2 = document.getElementById("op2");
const chk3 = document.getElementById("op3");
const btnNext = document.getElementById("btnNext");
const mapQA = new Map();
const audio = new Audio("./assets/resources/correctAns.mp3");

fillMap();
getQuestions(state);
console.log(audio);
//
//  Since im not using a database, the questions and their
//  answers are hardcoded here as hashmap (key, value)
//
function fillMap() {
  mapQA.set("Where did Lionel Messi get married?", "Rosario");
  mapQA.set("Where is Bangladesh located?", "Asia");
  mapQA.set("Which year did Japan attack Pearl Harbor?", "1941");
  mapQA.set("How many FIFA World Championships has won France?", "2");
  mapQA.set(
    "Which is the name of the first nuclear powered submarine?",
    "USN. Nautilus"
  );
  mapQA.set("Where is Ciudad del Cabo located?", "South Africa");
  mapQA.set("Which is world's largest country?", "Russia");
  mapQA.set(
    "Which year was that Germany surrendered to the Allies during 2nd World War?",
    "1945"
  );
  mapQA.set("Who did write 'The Lord of the Rigns'?", "J.R.R. Tolkien");
  mapQA.set("Which year did USA become independant? ", "1776");
  mapQA.set(
    "How many Formula 1 World Championships did Juan Manuel Fangio win?",
    "5"
  );
  mapQA.set("How great Lionel Messi is?", "There arent enough words for that");
  mapQA.set(
    "Which year was it when humans first set foot on the moon?",
    "1969"
  );
  mapQA.set("Between which years was the Eiffel Tower built?", "1887 - 1889");
  mapQA.set(
    "How many Tennis Master Championships did David Nalbandian win?",
    "1"
  );
}

//
//  Sets the question to the first question of the hashmap
//
function getQuestions(state) {
  document.getElementById("question").textContent = Array.from(mapQA)[state][0];
  fillOptions(state);
}

//
//  Decides where the correct answer is located (random between
//  first and third so every game is different
//
function fillOptions() {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1: {
      document.getElementById("opLbl1").textContent =
        Array.from(mapQA)[state][1];
      getMoreOptions(2, 3);
      break;
    }
    case 2: {
      document.getElementById("opLbl2").textContent =
        Array.from(mapQA)[state][1];
      getMoreOptions(1, 3);
      break;
    }
    case 3: {
      document.getElementById("opLbl3").textContent =
        Array.from(mapQA)[state][1];
      getMoreOptions(1, 2);
      break;
    }
  }
}

//
//  Adds 2 extra options so the user can choose
//
function getMoreOptions(slot1, slot2) {
  const option1 = document.getElementById("opLbl" + slot1);
  //console.log(option1 + " " + slot1);
  const option2 = document.getElementById("opLbl" + slot2);
  // console.log(option2 + " " + slot2);

  switch (state) {
    case 0: {
      option1.textContent = "Santa Fe";
      option2.textContent = "Buenos Aires";
      break;
    }
    case 1: {
      option1.textContent = "Europa";
      option2.textContent = "Africa";
      break;
    }
    case 2: {
      option1.textContent = "1937";
      option2.textContent = "1939";
      break;
    }
    case 3: {
      option1.textContent = "3";
      option2.textContent = "0";
      break;
    }
    case 4: {
      option1.textContent = "USN. Enterprise";
      option2.textContent = "USN. Yorktown";
      break;
    }
    case 5: {
      option1.textContent = "Mexico";
      option2.textContent = "Uruguay";
      break;
    }
    case 6: {
      option1.textContent = "China";
      option2.textContent = "Canada";
      break;
    }
    case 7: {
      option1.textContent = "1943";
      option2.textContent = "1944";
      break;
    }
    case 8: {
      option1.textContent = "George R.R. Martin";
      option2.textContent = "Arthur Conan Doyle";
      break;
    }
    case 9: {
      option1.textContent = "1786";
      option2.textContent = "1754";
      break;
    }
    case 10: {
      option1.textContent = "7";
      option2.textContent = "3";
      break;
    }
    case 11: {
      option1.textContent = "Bigger than Hagrid";
      option2.textContent = "Dragon Sized";
      break;
    }
    case 12: {
      option1.textContent = "1968";
      option2.textContent = "1967";
      break;
    }
    case 13: {
      option1.textContent = "1947-1949";
      option2.textContent = "1889-1991";
      break;
    }
    case 14: {
      option1.textContent = "0";
      option2.textContent = "3";
      break;
    }
  }
}

//
//  Button event listener, validates the answer and adds points
//
btnNext.addEventListener("click", () => {
if (
    state < mapQA.size - 1 &&
    (chk1.checked || chk2.checked || chk3.checked)
  ) {
  if (chk1.checked && getOptions(1) == Array.from(mapQA)[state][1]) {
    points += 10;
    document.getElementById("score").textContent = points;
    Beep();
  } else if (chk2.checked && getOptions(2) == Array.from(mapQA)[state][1]) {
    points += 10;
    document.getElementById("score").textContent = points;
    Beep();
  } //
  else if (chk3.checked && getOptions(3) == Array.from(mapQA)[state][1]) {
    points += 10;
    document.getElementById("score").textContent = points;
    Beep();
  } else {
    wrongAnswer();
  }

    resetButton();
    state++;
    getQuestions(state);
  } else {
    wrongAnswer();
  }
});

//
//  Resets radials and button color on next question
//
function resetButton() {
  btnNext.style.backgroundColor = "#ffff";
  btnNext.style.color = "#000000";
  chk1.checked = false;
  chk2.checked = false;
  chk3.checked = false;
}

//
// Sets button color on bad answer or no radial selected
//
function wrongAnswer() {
  btnNext.style.backgroundColor = "#ff0000";
  btnNext.style.color = "#ffff";
}

//
//  Returns selected answer text
//
function getOptions(optionNumber) {
  const option = document.getElementById("opLbl" + optionNumber).textContent;
  return option;
}

//
// Plays a sound on correct answer
//
function Beep() {
  audio.play();
}
