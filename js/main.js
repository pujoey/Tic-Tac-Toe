console.log("Script Linked");
 
 //declaring a 2D board
var board = [[null,null,null],
             [null,null,null],
             [null,null,null]];
           
var turns = 1; //starting with first turn  
var hasWinner =false; //whether there is a winner
var twoPlayer = true;

//function takes row and col and parameters and set either X or O depending on the turns
//checks winning conditions after sixth move
function set(row, col) {
    //checks odd or even number to determine player 1 or 2's turn
    if (Math.abs(turns%2) === 1) {
    board[row][col]= "X";
    event.target.style.backgroundImage= 'url("http://i.imgur.com/TfKUAOP.png")'; }
    else {
    board[row][col]= "O";
    event.target.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";  }

    if (turns >= 5) { 
      checkWin("X"); 
      checkWin("O"); };

    if (hasWinner == false) { 
      if (checkTie()==true) return; 
      turns++; 
      if (twoPlayer) { computerMove(); } } 

    if (hasWinner == false) { 
    (Math.abs(turns%2) === 1) ? document.getElementById("result").innerHTML = "Player 1" : 
                                document.getElementById("result").innerHTML = "Player 2"; }                                             

}

function checkTie() {
      if (turns ===9) {
          event.preventDefault(); //prevents default action
          document.getElementById("result").innerHTML = "TIE GAME!";
          return true; };
}


function checkWin(a) {   
  //checks winning condition for left to right scenarios
  (board[0][0] === a && board[0][1] ===a && board[0][2]) ===a ? winner(a): 
  (board[1][0] === a && board[1][1] ===a && board[1][2]) ===a ? winner(a):
  (board[2][0] === a && board[2][1] ===a && board[2][2]) ===a ? winner(a):

  //checking winning conditions for across scenarios
  (board[0][0] === a && board[1][1] ===a && board[2][2]) ===a ? winner(a):
  (board[2][0] === a && board[1][1] ===a && board[0][2]) ===a ? winner(a):

  //checking winning conditions for top to bottom scenarios
  (board[0][0] === a && board[1][0] ===a && board[2][0]) ===a ? winner(a): 
  (board[0][1] === a && board[1][1] ===a && board[2][1]) ===a ? winner(a):
  (board[0][2] === a && board[1][2] ===a && board[2][2]) ===a ? winner(a): false;
  //returns false and lets the game keep running if no winner
}

//function takes "X" or "O" and annouce the winner
function winner(player) {
  if (twoPlayer == true && player==="O") { document.getElementById("result").innerHTML = "Computer WINS!"; }
    else { document.getElementById("result").innerHTML = "Player " + player + " WINS!"; }
  hasWinner = true;
}

//combine with button for "new game"
var mouseEvents = document.getElementById('button1');
mouseEvents.addEventListener('click', function() {    
  document.getElementById("result").innerHTML = "GAME RESET! Player 1";

  board = [[null,null,null],
           [null,null,null],
           [null,null,null]];
  turns = 1;
  hasWinner = false;
  document.getElementById("one").removeAttribute("style");
  document.getElementById("two").removeAttribute("style");
  document.getElementById("three").removeAttribute("style");
  document.getElementById("four").removeAttribute("style");
  document.getElementById("five").removeAttribute("style");
  document.getElementById("six").removeAttribute("style");
  document.getElementById("seven").removeAttribute("style");
  document.getElementById("eight").removeAttribute("style");
  document.getElementById("nine").removeAttribute("style");
 }
);

//listen for button 1P to play against computer
var mouseEvents = document.getElementById('button2');
mouseEvents.addEventListener('click', function() {    
  twoPlayer = true;
});

//listen for button 2P to play 2 player game
var mouseEvents = document.getElementById('button3');
mouseEvents.addEventListener('click', function() {    
  twoPlayer = false;
});

//listens for player mouse click and SET() the board and then change colors
var mouseEvents1 = document.getElementById('one');
mouseEvents1.addEventListener('click', function(event) { 
  set(0, 0); });

var mouseEvents1 = document.getElementById('two');
mouseEvents1.addEventListener('click', function(event) { 
    set(0, 1); });

var mouseEvents1 = document.getElementById('three');
mouseEvents1.addEventListener('click', function(event) { 
   set(0, 2); });

var mouseEvents1 = document.getElementById('four');
mouseEvents1.addEventListener('click', function(event) { 
    set(1, 0); });

var mouseEvents1 = document.getElementById('five');
mouseEvents1.addEventListener('click', function(event) { 
  set(1, 1); });

var mouseEvents1 = document.getElementById('six');
mouseEvents1.addEventListener('click', function(event) { 
    set(1, 2); });

var mouseEvents1 = document.getElementById('seven');
mouseEvents1.addEventListener('click', function(event) { 
    set(2, 0); });

var mouseEvents1 = document.getElementById('eight');
mouseEvents1.addEventListener('click', function(event) { 
    set(2, 1); });

var mouseEvents1 = document.getElementById('nine');
mouseEvents1.addEventListener('click', function(event) { 
    set(2, 2); });



function computerMove() {

  //computer check winning condition
  //computer check player winning condition
  //computer generate random move
  do {
  var x = Math.floor((Math.random() * 9) + 1);
  var emptyPosition = false;

  if (x==1 && board[0][0] === null) {
    board[0][0]= "O";
    var element = document.getElementById("one");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";  
    emptyPosition = true;  }

  if (x==2 && board[0][1] === null) {
    board[0][1]= "O";
    var element = document.getElementById("two");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";  
    emptyPosition = true;  }

  if (x==3 && board[0][2] === null) {
    board[0][2]= "O";
    var element = document.getElementById("three");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }

  if (x==4 && board[1][0] === null) {
    board[1][0]= "O";
    var element = document.getElementById("four");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }

  if (x==5 && board[1][1] === null) {
    board[1][1]= "O";
    var element = document.getElementById("five");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }  

  if (x==6 && board[1][2] === null) {
    board[1][2]= "O";
    var element = document.getElementById("six");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }  

  if (x==7 && board[2][0] === null) {
    board[2][0]= "O";
    var element = document.getElementById("seven");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }  

  if (x==8 && board[2][1] === null) {
    board[2][1]= "O";
    var element = document.getElementById("eight");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }  

  if (x==9 && board[2][2] === null) {
    board[2][2]= "O";
    var element = document.getElementById("nine");
    element.style.backgroundImage= "url('http://i.imgur.com/bvuveaX.png')";
    emptyPosition = true;  }  

  } while (emptyPosition == false)

  if (turns >= 5) { 
      checkWin("X"); 
      checkWin("O"); }

  if (hasWinner == false) { 
  turns++; }
}

