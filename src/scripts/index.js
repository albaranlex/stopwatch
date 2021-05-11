//SELECTORS
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
const display = document.querySelector(".clock");

//VARIABLES
let mili = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displayMili = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let isRunning = false;

function stopWatch() {
  if (isRunning === true) {
    mili++;

    if (mili / 100 === 1) {
      mili = 0;
      seconds++;

      if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
      }

      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }

    if (mili < 10) {
      displayMili = "0" + mili.toString();
    } else {
      displayMili = mili;
    }
    if (seconds < 10) {
      displaySeconds = "0" + seconds.toString();
    } else {
      displaySeconds = seconds;
    }
    if (minutes < 10) {
      displayMinutes = "0" + minutes.toString();
    } else {
      displayMinutes = minutes;
    }
    if (hours < 10) {
      displayHours = "0" + hours.toString();
    } else {
      displayHours = hours;
    }

    display.innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}:${displayMili}`;
  }
}

function startTimer() {
  if (isRunning === false) {
    isRunning = true;

    if (isRunning) {
      interval = setInterval(stopWatch, 10);
      document.querySelector(".motion").style.display = "unset";
    }
  }
}

function stopTimer() {
  isRunning = false;
  clearInterval(interval);
  document.querySelector(".still").style.display = "unset";
  document.querySelector(".motion").style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = "00:00:00:00";
}

//EVENTS
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
