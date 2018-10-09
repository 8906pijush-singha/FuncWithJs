/*************************************************************************
 * @ purpose :understanding recursion in js
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
    rl.question('Enter your String: ',function(str){
        var arr=[];
        arr=str.split('');
        var r=arr.length-1;
        var l=0;
        utility.permutation(arr,l,r);
        //console.log(str+l+' '+r);
        rl.close();
    })
}
/*
*calling the test() to start the program execution
*/
test();