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

/* Used in the 6th Exercise solution */
var statusElement = document.getElementById("status");

var atStart = false;
var mazeCompleted = false;
var lost = false;

function handleLoss() {
  lost = true;
  statusElement.textContent = "You lose. The game is over.";
  boundaries.forEach(function (boundary) {
    boundary.style.backgroundColor = "red";
  });
}
function handleWin() {
  statusElement.textContent = "You win! You've successfully completed the maze.";
  mazeCompleted = true;
}
start.addEventListener("mouseenter", function () {
  atStart = true;
  mazeCompleted = false;
  lost = false; 
  boundaries.forEach(function (boundary) {
    boundary.style.backgroundColor = "#eeeeee";
  });
  statusElement.textContent = "Move your mouse over the 'S' to begin.";
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

/*Exercise 7*/
// Checks if the user moves out of the maze boundaries after starting the game.
document.addEventListener("mousemove", function (event) {
  if (atStart && !mazeCompleted && !lost) {
    // Check if the mouse is outside the maze
    if (
      event.target !== start &&
      event.target !== end &&
      !Array.from(boundaries).includes(event.target)
    ) {
      // Handle a loss if the user moves outside the maze
      handleLoss();
    }
  }
});

});