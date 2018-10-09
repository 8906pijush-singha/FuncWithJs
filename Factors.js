
/*************************************************************************
 * @ purpose :understanding while loop 
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
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
    rl.question('enter the number: ',function(no)
    {
        /*
        *checking if the input is invalis then throw an error
        *or continue the program flow
        */
        try
        {
            if(isNaN(no)) throw 'not a number'
            if(parseInt(no)<=0) throw 'invalid'
            if(no=='') throw 'empty'
            utility.factors(no);
            rl.close();
        }catch(err)
        {
            console.log('inputs is '+err);
            rl.close();
        }
    });
}
/*
*calling the test() to start the program execution
*/
test();