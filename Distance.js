
/*************************************************************************
 * @ purpose :understanding Math.pow() and Math.sqrt() 
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
    rl.question('enter your coordinate: ',function(x){
        rl.question('',function(y){
            /*
            *checking if the input is not a number then throw an error
            *or continue the program flow
            */
            try{
                if(isNaN(x)||isNaN(y)) throw 'not a number'
                utility.distance(x,y);
                rl.close();
            }catch(err){
                console.log('input is '+err);
                rl.close();
            }
        })
    })
}
/*
*calling the test() to start the program
*/
test();