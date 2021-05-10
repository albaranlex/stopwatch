//SELECTORS
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
//VARIABLES
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
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

  document.querySelector(".clock").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
  if (status === "stopped") {
    interval = window.setInterval(stopWatch, 1000);
    document.querySelector("#startStop").innerHTML = "STOP";
    document.querySelector(".motion").style.display = "unset";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.querySelector("#startStop").innerHTML = "START";
    document.querySelector(".still").style.display = "unset";
    document.querySelector(".motion").style.display = "none";
    status = "stopped";
  }
}

function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector(".clock").innerHTML = "00:00:00";
  document.querySelector("#startStop").innerHTML = "START";
}
