/*************************************************************************
 * @ purpose :understanding 2d array in js
 * @author  Pijush Singha
 * @version 1.0
 * @since 26/09/2018
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
    rl.question('enter no of rows :',function(rows){
        rl.question('enter no of columns :',function(columns){
            /*
            *checking if the input is not a number then throw an error
            *or continue the program flow
            */
            try{
                if(isNaN(rows)||isNaN(columns)) throw 'not a number'
                if(parseInt(rows)<0||parseInt(columns)<0) throw 'negative'
                if(rows==''||columns=='') throw 'empty'
                takeInput(rows,columns);
            }catch(err){
                console.log('the input is '+err);
                rl.close();
            }
        })  
    })
}
/*
*calling the test() to start the program execution
*/
test();
/*
*taking array inputs using recursion
*/
function takeInput(rows,columns)
{   
    var arr1=[];
    var size=parseInt(rows)*parseInt(columns);
    console.log('enter the elements: ');
    recursion(size);
    function recursion(len)
{
    if(len>0)
    {
        rl.question('',function(i)
        {
            arr1.push(i);
            len--;
            recursion(len);
        });
    }
    else
    {
        rl.close();
        utility.twoDArray(parseInt(rows),parseInt(columns),arr1);
    }
}
}