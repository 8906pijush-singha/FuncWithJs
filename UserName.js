/*************************************************************************
 * @ purpose :understanding taking inputs from user and printing otput to the console 
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
*require('readline') is used to access the readline module
*/
const readline = require('readline');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
*username() declaretion 
*/
function username(){
    var str='Hello %s!! How are you??';
    rl.question('Enter your user-name :\n', function(userinput) {
        if(userinput.length>3)
            console.log(str,userinput);
        else
            console.log('user-name should contain more than 3 characters. ' )
      rl.close();
    });
    
}
/*
*calling the username() to start the program execution
*/
username();
