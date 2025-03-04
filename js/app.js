// User sees an empty 9 by 9 grid of cells save for several random numbers

// the entire board will be full. only a handfull of numbers will be visible. the numbers will appear when the user chooses the correct selected number

// The user will click an empty cell (.cell) then click a number (.numBtn) to fill that cell space

// if the selection is incorrect/or if the (.numBtn) does not match the innerHTML of the selected cell, nothing will happen in the cell.

// The user will see an "Incorrect Move" message at the top of the game board (#message) if the move was incorrect

// if the selection is correct, the number that was selected (.numBtn) will appear in the cell (.cell innerHTML)

// The user will see a "Correct Move!" message at the top of the game board (#message) if the move was correct

// Each row, column, and square grid will contain one of each number between 1-9

// LEVEL-UP: the user will only be able to make 3 incorrect moves. the 4th move will reset the game and show a "Game Over" message in the (#message) element

// when the user finishes the game (all the cells are filled) then a "You Won!" message will appear in the #message element

// ----------------------------------------------


// assign constant to the game board array
const boardSolution = [
    ['6', '3', '7', '8', '2', '5', '1', '9', '4'],
    ['8', '4', '5', '7', '9', '1', '3', '2', '6'],
    ['2', '1', '9', '4', '3', '6', '8', '5', '7'],
    ['4', '8', '3', '9', '7', '2', '5', '1', '6'],
    ['9', '5', '2', '1', '6', '8', '4', '3', '7'],
    ['6', '7', '1', '5', '4', '3', '9', '2', '8'],
    ['2', '5', '9', '3', '6', '8', '7', '4', '1'],
    ['6', '7', '3', '5', '1', '4', '2', '8', '9'],
    ['1', '8', '4', '7', '9', '2', '3', '6', '5']
];



// assign empty arrays to rows, columns, and squares
//1) Define the required variables used to track the state of the game.
let board = [];

let messageText = "";


//2) Store cached element references.
const messageTextEl = document.getElementById('message');

const cell4ls = document.querySelectorAll('.cell');
const divSquare0Els = document.querySelectorAll('.cell0');
const divSquare1Els = document.querySelectorAll('.cell1');
const divSquare2Els = document.querySelectorAll('.cell2');
const divSquare3Els = document.querySelectorAll('.cell3');
const divSquare4Els = document.querySelectorAll('.cell4');
const divSquare5Els = document.querySelectorAll('.cell5');
const divSquare6Els = document.querySelectorAll('.cell6');
const divSquare7Els = document.querySelectorAll('.cell7');
const divSquare8Els = document.querySelectorAll('.cell8');

const boardElArrays = [divSquare0Els, divSquare1Els, divSquare2Els, divSquare3Els, divSquare4Els, divSquare5Els, divSquare6Els, divSquare7Els, divSquare8Els];

const numberButtons = document.querySelectorAll('.numBtn');

const resetBtnEl = document.querySelector('.button');


//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

function init() {
    board = [
        ['', '3', '', '8', '', '', '', '', ''],
        ['8', '', '', '', '', '', '3', '2', ''],
        ['2', '', '9', '4', '', '', '', '5', '7'],
        ['4', '', '3', '', '', '2', '', '', ''],
        ['9', '', '', '', '', '', '', '', '7'],
        ['', '', '', '5', '', '', '9', '', '8'],
        ['2', '5', '', '', '', '8', '7', '', '1'],
        ['', '7', '3', '', '', '', '', '', '9'],
        ['', '', '', '', '', '2', '', '6', '']
    ];


    messageText = "Breathe and smell the coffee";
    messageTextEl.textContent = messageText;
    updateBoard();

}

//4) The state of the game should be rendered to the user.

// write a function called updateSquare should accept an array of divs in a section(square) and the corresponding array from the board
function updateSquares(nestedBoardArray, divSquareArray) {
    // iterate through arrays
    for (let i = 0; i < nestedBoardArray.length; i++) {
        divSquareArray[i].innerText = nestedBoardArray[i];
    }
    // for each element 
    // it will update the divs based on the array
}


// write a function called updateBoard that iterates over the BOARD array (which contains the SQUARE ARRAY)
// for each SQUARE ARRAY, call the updateSquare function
function updateBoard() {
    // loop
    for (let i = 0; i < boardElArrays.length; i++) {
        updateSquares(board[i], boardElArrays[i]);
    }
}



// the user will click a number button and then a cell they want to set it to. if the number matches the assigned number for the cell through the boardSolution array, the number will appear. if it does not match, it will give a wrong move alert.


let selectedButtonId = null;

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        selectedButtonId = event.target.id;
        cell4ls.forEach(cell => {
            console.log("event.target.id", event.target.id)
            if (cell.textContent === event.target.id) {
                cell.classList.add('highlight')
            } else {
                cell.classList.remove('highlight')

            }
        })
    });
});


cell4ls.forEach(cell => {
    cell.addEventListener('click', (event) => {

        if (selectedButtonId) {
            // event.target.textContent = selectedButtonId;
            const cellClass = event.target.className.split('')[4];
            const cellId = event.target.id.split('')[1];
            //board[cell number][id number] = selectedButtonId

            board[cellClass][cellId] = selectedButtonId;
            selectedButtonId = null;


            // check win function gets invoked here
            updateBoard()
            checkWin();
        }
    });
});

function checkWin() {
    let correctMovesCount = 0;
    let totalMovesCount = 0;

    // compare the board array to boardSolution nested array
    // loop through the board array and for each element compare it to the same index in the boardSolution array
    for (i = 0; i < board.length; i++) {

        board[i].forEach((element, index) => {

            if (element !== '') {
                totalMovesCount++;
            }

            if (boardSolution[i][index] === element) {
                correctMovesCount++;
            }

            if (correctMovesCount === 81) {

                messageText = "You Won!"
                messageTextEl.textContent = messageText;
            } else if (totalMovesCount === 81) {
                messageText = "Try Again!"
                messageTextEl.textContent = messageText;
            }
            // update messageText variable, this is the "state"

            // else {
            //     messageText = "Try Again"
            // }
            // render update to state
        })
    }
}

resetBtnEl.addEventListener('click', () => {
    init();
    cell4ls.forEach(cell => cell.classList.remove('highlight'))

});


init()

