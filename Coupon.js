/*************************************************************************
 * @ purpose :making coupon by using random number
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
*require('readline') is used to access the readline module
*/
var readline=require('readline');
/*
*require(path) is used to access the utility file functions module
*it returns an object of utility file
*/
var utility =require('./Utility/utility');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/*
*test() declaretion
*/
function test(){
    rl.question('how many Coupon do you need?\n',function(no){
        /*
        *checking if the input is not a number then throw an error
        *or continue the program flow
        */
        try{
            if(isNaN(no)) throw 'not a number'
            if(parseInt(no)<0) throw 'invalid'
            if(no=='') throw 'empty'
            /*
            *calling the couppon func of utility
            */
            utility.coupon(no);
            rl.close();
        }catch(err){
            console.log('input is '+err);
            rl.close();
        }
    })
}
/*
*calling the test() to start the program
*/
test();
