/*************************************************************************
 * @ purpose :making a tictactoe game for two user x and 0
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
 *************************************************************************/
/*
*require(path) is used to access the utility file functions module
*it returns an object of utility file
*/
var utility=require('./Utility/utility1');
/*
*require('readline') is used to access the readline module
*/
var read=require('readline');

/*
*readline.createInterface is used to access process.stdin and process.stdout
**/
var rl=read.createInterface(process.stdin,process.stdout);
/*
*we can insert valid data 9 no of times
*/ 
var n=9;
/*
*playTurn() declaretion 
*/
function playTurn (player) {
    console.log('Your turn player: '+player);
    rl.question('enter the position: ',function(position){
    if (utility.validateMove(position) == true) {
        utility.markBoard(position, player);
        utility.printBoard();
        /*
        *n<6 is to restrict the checkWin call for first four inputs
        */
        if (utility.checkWin(player) == true && n<6) {
            console.log(player+' won!');
            rl.close();
            return;
        }
        if (n%2!=0) 
        {
            if(n==1)// n==1 means we have taken all the inputs
            {
                console.log('The match is draw.');
                rl.close();
                process.exit(0);
            }
            n--;
            playTurn('O');
        } else 
        {
            if(n==1)
            {
                console.log('The match is draw.');
                rl.close();
                process.exit(0);
            }
            n--;
            playTurn('X');//calling the function
        }
    } else 
    {
        console.log('incorrect input please try again...');
        playTurn(player);//calling the function again
    }});
}
/*
*first time printing the tictactoe board
*/
    console.log('Game started: \n' +
' 1 | 2 | 3 \n' +
' --------- \n' +
' 4 | 5 | 6 \n' +
' --------- \n' +
' 7 | 8 | 9 \n');

playTurn('X');
