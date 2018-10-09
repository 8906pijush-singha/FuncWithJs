/*************************************************************************
 * @ purpose :understanding Math.pow() and Math.sqrt()
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
    rl.question('enter temperature and the speed of the wind: ',function(temperature){
        rl.question('',function(speed){
            /*
            *checking if the input is not a number then throw an error
            *or continue the program flow
            */
            try{
                if(isNaN(temperature)||isNaN(speed)) throw 'not a number'
                if(parseInt(temperature)<0||parseInt(speed<0)) throw 'negative'
                if(temperature==''||speed=='') throw 'empty'
                utility.windChill(temperature,speed);
                rl.close();
            }catch(err){
                console.log('the input is ');
                rl.close();
            }

        })
    })
}
/*
*calling the test() to start the program execution
*/
test();