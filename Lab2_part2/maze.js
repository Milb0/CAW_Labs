document.addEventListener("DOMContentLoaded", function() {

/* Exercise 01: 
var boundary1 = document.getElementById("boundary1");
boundary1.addEventListener("mouseenter", function() {
  boundary1.style.backgroundColor = "red";
});
boundary1.addEventListener("mouseleave", function() {
  boundary1.style.backgroundColor = "#eeeeee";
}); */

/* Exercise 02:*

var boundaries = document.querySelectorAll(".boundary:not(.example)");

boundaries.forEach(function (boundary) {
  
  boundary.addEventListener("mouseenter", function () {
    boundaries.forEach(function (b) {
      b.style.backgroundColor = "red";
    });
  });

  boundary.addEventListener("mouseleave", function () {
    boundaries.forEach(function (b) {
      b.style.backgroundColor = "#eeeeee";
    });
  });
});*/

/* Exercises 3:
var start = document.getElementById("start");
var end = document.getElementById("end");

var atStart = false;
var mazeCompleted = false;

start.addEventListener("mouseenter", function () {
  atStart = true;
  mazeCompleted = false;
});

end.addEventListener("mouseenter", function () {
  if (atStart && !mazeCompleted) {
    alert("You win! You've successfully completed the maze.");
    mazeCompleted = true;
  }
});*/ 

var start = document.getElementById("start");
var end = document.getElementById("end");
var boundaries = document.querySelectorAll(".boundary");
var statusElement = document.getElementById("status");
var winsElement = document.getElementById("wins");
var lossesElement = document.getElementById("losses");

var atStart = false;
var mazeCompleted = false;
var lost = false;

// Load user's progress from localStorage
var wins = parseInt(localStorage.getItem("wins")) || 0;
var losses = parseInt(localStorage.getItem("losses")) || 0;

function updateHistory() {
  winsElement.textContent = wins;
  lossesElement.textContent = losses;
}

function handleLoss() {
  if (!lost) {
    lost = true;
    statusElement.textContent = "You lose. The game is over. Click on 'S' to restart.";
    boundaries.forEach(function (boundary) {
      boundary.style.backgroundColor = "red";
    });
    losses++;
    updateHistory();
    // Save the updated losses to localStorage
    localStorage.setItem("losses", losses);
  }
}

function handleWin() {
  statusElement.textContent = "You win! Click on 'S' to restart.";
  mazeCompleted = true;
  start.textContent = "S";
  start.style.backgroundColor = "#88ff88";
  wins++;
  updateHistory();
  // Save the updated wins to localStorage
  localStorage.setItem("wins", wins);
}

// Load user's progress on page load
updateHistory();

start.addEventListener("mouseenter", function () {
  if (!mazeCompleted) {
    atStart = true;
    lost = false;
    boundaries.forEach(function (boundary) {
      boundary.style.backgroundColor = "#eeeeee";
    });
    statusElement.textContent = "Get to the End to win. Beware of the boundaries.";
  }
});

end.addEventListener("mouseenter", function () {
  if (atStart && !mazeCompleted && !lost) {
    handleWin();
  }
});

boundaries.forEach(function (boundary) {
  boundary.addEventListener("mouseenter", function () {
    if (atStart && !mazeCompleted) {
      handleLoss();
    }
  });
});

start.addEventListener("click", function () {
  if (mazeCompleted) {
    mazeCompleted = false;
    atStart = false;
    start.textContent = "S";
    start.style.backgroundColor = "#88ff88";
    boundaries.forEach(function (boundary) {
      boundary.style.backgroundColor = "#eeeeee";
    });
    statusElement.textContent = "Move your mouse over the 'S' to begin.";
  }
});

document.addEventListener("mousemove", function (event) {
  if (atStart && !mazeCompleted && !lost) {
    if (!document.getElementById("maze").contains(event.target)) {
      handleLoss();
    }
  }
});



});