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



let allCorrectMoves = null;
let winner = null;
let lose = null;
let messageText = "";


//2) Store cached element references.
const messageTextEl = document.getElementById('message');

const cellEls = document.querySelectorAll('.cell');
const childSquareAEls = document.querySelectorAll('.cellA');
const childSquareBEls = document.querySelectorAll('.cellB');
const childSquareCEls = document.querySelectorAll('.cellC');
const childSquareDEls = document.querySelectorAll('.cellD');
const childSquareEEls = document.querySelectorAll('.cellE');
const childSquareFEls = document.querySelectorAll('.cellF');
const childSquareGEls = document.querySelectorAll('.cellG');
const childSquareHEls = document.querySelectorAll('.cellH');
const childSquareIEls = document.querySelectorAll('.cellI');

const boardElArrays = [childSquareAEls, childSquareBEls, childSquareCEls, childSquareDEls, childSquareEEls, childSquareFEls, childSquareGEls, childSquareHEls, childSquareIEls];

const numberButtons = document.querySelectorAll('.numBtn');

const resetBtnEl = document.querySelector('.button');


//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

function init() {
    // board = [
    //     ['', '3', '', '8', '', '', '', '', ''],
    //     ['8', '', '', '', '', '', '3', '2', ''],
    //     ['2', '', '9', '4', '', '', '', '5', '7'],
    //     ['4', '', '3', '', '', '2', '', '', ''],
    //     ['9', '', '', '', '', '', '', '', '7'],
    //     ['', '', '', '5', '', '', '9', '', '8'],
    //     ['2', '5', '', '', '', '8', '7', '', '1'],
    //     ['', '7', '3', '', '', '', '', '', '9'],
    //     ['', '', '', '', '', '2', '', '6', '']
    // ];
    board = [
        ['6', '3', '7', '8', '2', '5', '1', '9', '4'],
        ['8', '4', '5', '7', '9', '1', '3', '2', '6'],
        ['2', '1', '9', '4', '3', '6', '8', '5', '7'],
        ['4', '8', '3', '9', '7', '2', '5', '1', '6'],
        ['9', '5', '2', '1', '6', '8', '4', '3', '7'],
        ['6', '7', '1', '5', '4', '3', '9', '2', '8'],
        ['2', '5', '9', '3', '6', '8', '7', '4', '1'],
        ['6', '7', '3', '5', '1', '4', '2', '8', '9'],
        ['1', '8', '4', '7', '9', '2', '3', '6', '']
    ]


    winner = false;
    lose = false;
    allCorrectMoves = null;
    messageText = "";
    updateBoard();

}

//4) The state of the game should be rendered to the user.

// write a function called updateSquare should accept an array of divs in a section(square) and the corresponding array from the board
function updateSquare(squareArray, childSquareElArray) {
    // iterate through arrays
    for (let i = 0; i < squareArray.length; i++) {
        squareArray.forEach((array) => {
            childSquareElArray[i].innerText = squareArray[i];

        })
    }
    // for each element 
    // it will update the divs based on the array
}


// write a function called updateBoard that iterates over the BOARD array (which contains the SQUARE ARRAY)
// for each SQUARE ARRAY, call the updateSquare function
function updateBoard() {
    // loop
    for (let i = 0; i < boardElArrays.length; i++) {

        updateSquare(board[i], boardElArrays[i]);
    }
}


// init()

// the user will click a number button and then a cell they want to set it to. if the number matches the assigned number for the cell through the boardSolution array, the number will appear. if it does not match, it will give a wrong move alert.


let selectedButtonId = null;

numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        selectedButtonId = event.target.id;
        cellEls.forEach(cell => {
            console.log("event.target.id", event.target.id)
            if (cell.textContent === event.target.id) {
                cell.classList.add('highlight')
            } else {
                cell.classList.remove('highlight')

            }
        })
    });
});


cellEls.forEach(cell => {
    cell.addEventListener('click', (event) => {

        if (selectedButtonId) {
            event.target.textContent = selectedButtonId;
            selectedButtonId = null;
            // check win function gets invoked here
            checkWin();
        }
    });
});

function checkWin() {
    // compare the board array to boardSolution nested array
    // loop through the board array and for each element compare it to the same index in the boardSolution array
    console.log('allCorrectMoves 1', allCorrectMoves)
    for (i = 0; i < board.length; i++) {
        console.log('allCorrectMoves 2', allCorrectMoves)

        board[i].forEach((element, index) => {

            console.log('allCorrectMoves 3', allCorrectMoves)
            console.log('solution does not equal board', boardSolution[i][index] !== element)
            console.log('solution, board', boardSolution[i][index], element)
            console.log('solution, board types', typeof boardSolution[i][index], typeof element)
            if (boardSolution[i][index] !== element) {

                allCorrectMoves = false;
            }
            console.log('allCorrectMoves 4', allCorrectMoves)
            console.log('messageText 1', messageText)
            // update messageText variable, this is the "state"
            if (allCorrectMoves === true) {

                messageText = "You Won!"
                messageTextEl.textContent = messageText;
            }
            console.log('messageText 2', messageText)
            // else {
            //     messageText = "Try Again"
            // }
            // render update to state
        })
    }
}

resetBtnEl.addEventListener('click', () => {
    init();
    cellEls.forEach(cell => cell.classList.remove('highlight'))

});
init()

