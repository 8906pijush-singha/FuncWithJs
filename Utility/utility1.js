/*************************************************************************
 * @ purpose :making utility file functions for TicTacToe program
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/**
 * this code snippet is to mark the tictactoe board
 * according the position passed
 * @param {number} position 
 * @param {String} mark 
 */
function markBoard(position,mark)
{
  board[position]=mark;//
}
/**
 * this code snippet is to print tictactoe board to the console
 */
function printBoard() {
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

}
/**
 * this code snippet is to check the value passed to the board is number or not
 * using isNaN()
 * @param {*} value 
 */
function isInt(value)
{
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}
/**
 * this code snippet is to validate the move by checking the position is vacant or not
 * and the input is in between 0 to 9 or not
 * @param {number} position 
 */
function validateMove(position) {
   return (this.isInt(position) === true && board[position] === ' ') 
        
}
/**
 * this code snippet is to check user wins or not by simply traversing 
 * through win combination array
 * @param {string} player 
 * @returns {boolean}
 */
function checkWin(player) {
    for (var i = 0; i < winCombinations.length; i++) {
        var markCount = 0;
        for (var j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] == player) {
                markCount++;
            }
            else
            {
                break;
            }
            if (markCount == 3) {
                return true;
            }
        }
    }
    return false;
}      
var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
}
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
module.exports={

    checkWin,
    validateMove,
    isInt,
    printBoard,
    markBoard
}