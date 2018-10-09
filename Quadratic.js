/*************************************************************************
 * @ purpose :understanding how to take multiple inputs
 * @author  Pijush Singha
 * @version 1.0
 * @since 27/09/2018
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
    rl.question('enter a b and c of your quadratic equation: ',function(a)
    {
        rl.question('',function(b){
            rl.question('',function(c){
                /*
                *checking if the input is not a number then throw an error
                *or continue the program flow
                */
                try{
                    if(isNaN(a)||isNaN(b)||isNaN(c)) throw 'not a number'
                    if(a==''||b==''||c=='') throw 'empty'
                    utility.quadratic(a,b,c);
                    rl.close();
                }catch(err){
                    console.log('the input is '+err);
                }
                rl.close();
            })
        })
    })
}
/*
*calling the test() to start the program execution
*/
test();