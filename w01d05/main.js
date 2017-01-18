//tic tac

//logic- a player will click on a box and that box will either change color, or come up with an image.
//player will have 3 turns to win the game
//first I need to create a box 3 x 3 in html
// need to set an event (click) for the game to watch depending on turn
//need an alert button to welcome player to the game
//need to sort out a reset button for player to clear and start again
//need to write a function that calculates the winner, need to work out how to calculate that through rows, lines, diaginal

window.onload = func1;

var solutions = [[0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function func1() {
  var turns   = 0;
  var xMoves  = [];
  var oMoves  = [];
  var squares = document.getElementsByClassName("squares");
  var squaresArray = Array.prototype.slice.call(squares);
  var clear = document.getElementById('clear');
  // clear.removeEventListener('click', func1, false);
  clear.addEventListener('click', refreshy);
  function refreshy(){
    location.reload();
  }
  for (var i = 0; i < squares.length; i++){
    squaresArray[i].style.backgroundColor = 'brown';
    squaresArray[i].style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/RAF_roundel.svg/2000px-RAF_roundel.svg.png")';
    squaresArray[i].removeEventListener('click', takeTurn, false);
    squaresArray[i].addEventListener("click", takeTurn);
  }

  function takeTurn(){
    if (turns % 2 === 0){
      // this.style.backgroundColor = 'pink';
      this.style.backgroundImage = 'url("http://www.igoflags.com/wp-content/uploads/british-UK-flag-pattern-background.png")';
      xMoves.push(squaresArray.indexOf(this));
      checkForWin(xMoves, 'X');

    } else {
      this.style.backgroundColor = 'white';
      oMoves.push(squaresArray.indexOf(this));
      checkForWin(oMoves, 'O');
    }
    console.log("xMoves:", xMoves);
    console.log("oMoves:", oMoves);
    turns++;
  }

  function checkForWin(array, token){
    for (var j = 0; j < solutions.length; j++){
      if (array.includes(solutions[j][0]) &&
      array.includes(solutions[j][1]) &&
      array.includes(solutions[j][2])){
        alert(token + ' wins!. Game will start again when this box is closed');
        location.reload();
      }
    }
  }
}

// i now need to loop through this array. I will need to use a for loop.



//I FIRST TRY AT JS
//       var turns = 0;
//       var xMoves =[];
//       var oMoves =[];
// var moves = [1,2,3,4,5,6,7,8,9];
// moves.push("cellValue")


//       var squares = document.getElementsByClassName("squares");


//       for (var i = 0; i < squares.length; i++){
//         squares[i].addEventListener("click", function(){
//           console.log(this, "I've been clicked");
//           if (turns%2===0){this.style.backgroundColor =   'pink'; xMoves.push(this.value)
//           this.style.backgroundImage = 'url("images/hellokitty.png")';} oMoves.push(this.value)
//           else{this.style.backgroundColor = 'purple';}
//           turns++;
//         })
//       }
//     }

// var boxValue = function(key) {
//   switch(key) {
//     case '1': return null;
//     case '2': return null;
//     case '3': return 'x';
//     case '4': return null;
//     case '5': return 'o';
//     case '6': return null;
//     case '7': return null;
//     case '8': return 'o';
//     case '9': return 'x';
//     default:

//   }
// }

//     var getWinner = function() {
//       if (winnerIs('x')) {
//         return 'x';
//       }
//       if (winnerIs ('o')) {
//         return 'o';
//       }
//       return null;
//     }

// var winnerIsX = function() {
//   return winsRowX() || winsColumnX() || winsDiagonalX();
// }

// var winnerRowX = function(){
// return allThreeX(cellValue(1), cellValue(2), cellValue(3)) ||
// allThreeX(cellValue(4), cellValue(5), cellValue(6)) ||
//   allThreeX(cellValue(7), cellValue(8), cellValue(9));
// }
// var allThreeX = function(cellOne, cellTwo, cellThree) {

// }
// var getWinner = function(){
//   if (isWinnerX()) {
//     return 'x';
//   }
//   if (isWinnerO()) {
//     return 'o';
//   }
//   return null;
// }
// var isWinnerX = function() {
// return winsRowX() || winsColumnX() || winsDiagonalX();
// }
// var winsRowX = function() {
// return allThreeX(cell (1), cells(2), cells(3)) ||
// allThreeX(cell(4), cells(5), cells(6)) ||
// allThreeX(cell(7), cells(8), cells(9));
// }
// var winsColumnX = function() {
// return allThreeX(cell (1), cells(2), cells(3)) ||
// allThreeX(cell (4), cells(5), cells(6)) ||
// allThreeX(cell(7), cells(8), cells(9));
// }
// var winsDiagonalX = function() {
// return allThreeX(cell (1), cells(2), cells(3)) ||
// allThreeX(cell(4), cells(5), cells(6));

// }
// var allThreeX = function(cellOne, cellTwo, cellThree) {

// }

// var allThreeX = function(cellOne, cellTwo, cellThree) {
// return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');
// }
