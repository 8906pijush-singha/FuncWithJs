/*************************************************************************
 * @ purpose :taking multile inputs using recursion
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
var utility =require('./Utility/utility');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/*
*test() declaretion 
*/
function test()
{
    rl.question('Enter the size of your array: ',function(size)
    {
        /*
        *checking if the input is not a number then throw an error
        *or continue the program flow
        */
        try{
            if(isNaN(size)) throw 'not a number';
            if(parseInt(size)<0) throw 'negative'
            if(size=='') throw 'empty'
            arrayInputs(size);
        }catch(err){
            console.log('the input is '+err);
            rl.close();
            process.exit(0);
        }
    });
}
/*
*taking array inputs 
*/
function arrayInputs(size)
{
    var arr=[];
    var len=parseInt(size);
    console.log('enter the elements: ')
    recursion(len);
    function recursion(len)
{
    if(len>0)
    {
        rl.question('',function(i)
        {
            /*
            *checking if the input is not a number then throw an error
            *or continue the program flow
            */
            try{
                if(isNaN(i))throw 'not a number';
                arr.push(parseInt(i));
                len--;
                recursion(len);
            }catch(err){
                console.log('the input is '+err);
                rl.close();
            }

        });
    }
    else
    {
        rl.close();
        utility.triplets(arr);
    }
}
}
/*
*calling the test() to start the program execution
*/
test();