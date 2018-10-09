/*************************************************************************
 * @ purpose :understanding Math.random() in js
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
*require(path) is used to access the utility file functions module
*it returns an object of utility file
*/
var readline=require('readline');
/*
*require('readline') is used to access the readline module
*/
var utility=require('./Utility/utility');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/*
*test() declaretion 
*/
function test()
{
    rl.question('enter your stack: ',function(stack){
        rl.question('enter your goal: ',function(goal){
            rl.question('enter how many times you want to play: ',function(no){
                /*
                *checking if the input is not a number then throw an error
                *or continue the program flow
                */
                try{
                    if(isNaN(goal)||isNaN(stack)||isNaN(no)) throw 'not a number'
                    if(parseInt(goal)<=0||parseInt(stack)<0||parseInt(no)<0) throw 'negative'
                    if(goal==''||stack==''||no=='') throw 'empty'
                    if(parseInt(goal)<parseInt(stack)) throw 'invalid'
                    utility.gambler(stack,goal,no);
                    rl.close();
                }catch(err){
                    console.log('input is '+err);
                    rl.close();
                }
            })
        });
    });
}
/*
*calling the test() to start the program execution
*/
test();