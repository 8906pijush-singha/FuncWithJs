/*************************************************************************
 * @ purpose :understanding for loop and assignment operation in js
 * @author  Pijush Singha
 * @version 1.0
 * @since 26/09/2018
 *************************************************************************/
/*
*require(path) is used to access the utility file functions module
*it returns an object of utility file
*/
var utility=require('./Utility/utility');
/*
*require('readline') is used to access the readline module
*/
var read=require('readline');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=read.createInterface(process.stdin,process.stdout);
/*
*test() declaretion 
*/
function test()
{
    rl.question('enter the value of n:',function(n){
          /*
        *checking if the input is not a number then throw an error
        *or continue the program flow
        */
        try{
            if(isNaN(n)) throw 'not a number'
            if(parseInt(n)<0) throw 'negative'
            if(n=='') throw 'empty'
            utility.powOf2(n);
            rl.close();
        }catch(err){
            console.log('input is '+err);
            rl.close();
        }
    })
}
/*
*calling the test() to start the program execution
*/
test();