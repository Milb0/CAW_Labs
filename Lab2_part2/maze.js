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
// Used in the sixth exercise
var statusElement = document.getElementById("status");

var atStart = false;
var mazeCompleted = false;
var lost = false;

function handleLoss() {
  lost = true;
  // 6th exercise
  statusElement.textContent = "You lose. The game is over. Click on 'S' to restart.";
  boundaries.forEach(function (boundary) {
    boundary.style.backgroundColor = "red";
  });
}

function handleWin() {
  // 6th exercise
  statusElement.textContent = "You win! Click on 'S' to restart.";
  mazeCompleted = true;
  start.textContent = "S";
  start.style.backgroundColor = "#88ff88";
}

start.addEventListener("mouseenter", function () {
  if (!mazeCompleted) {
    atStart = true;
    lost = false;
    boundaries.forEach(function (boundary) {
      boundary.style.backgroundColor = "#eeeeee";
    });
    // 6th exercise
    statusElement.textContent = "Get the End to win beware of the boundaries.";
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
    // 6th exercise
    statusElement.textContent = "Move your mouse over the 'S' to begin.";
  }
});

/*Exercise 7*/
// Checks if the user moves out of the maze boundaries after starting the game.
document.addEventListener("mousemove", function (event) {
  if (atStart && !mazeCompleted && !lost) {
    if (!document.getElementById("maze").contains(event.target)) {
      handleLoss();
    }
  }
});


});