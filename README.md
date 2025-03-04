## Sudoku Gameplay

#### Game Description:
This game requires the user to fill a 9 by 9 grid of squares by using the numbers 1-9 only once in every row, column, and 3 by 3 subsquare. The user must fill every cell with it's corresponding number in order to receive the winning alert.

#### Technology Used:
* Javascript
* CSS

#### Instructions:

#### Code Snippets:

```Javascript
function updateBoard() {
    for (let i = 0; i < boardElArrays.length; i++) {
        updateSquares(board[i], boardElArrays[i]);
    }
}
```

#### Future Plans:
* Randomize numbers in board to provide unlimited gameplay to user
* Alert incorrect at individual moves
* Notes, undo, solve implementation
* User receives an alert when all 9 of a single number has been placed
* Timer feature & personal best score
* Coffeeshop background music



