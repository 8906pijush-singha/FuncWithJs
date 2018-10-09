/*************************************************************************
 * @ purpose :stop watch implementation in js
 * @author  Pijush Singha
 * @version 1.0
 * @since 26/09/2018
 *************************************************************************/
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
    console.log(".............STOP-WATCH.............\n");
    rl.question("please enter 'start' to start the stop-watch: ",function(startCommand){
        if(startCommand=='start')
        {
            /*
            *creating the date instance and storing the value to a variable
            */
            var start=new Date();
            console.log('stop-watch is running...');
            rl.question("enter 'stop' to stop the stop-watch: ",function(stopCommand){
                if(stopCommand=='stop')
                {
                    /*
                    *creating another date instance and storing the value to another variable
                    */
                    var end=new Date();
                    console.log('Elapsed time = '+(end-start)/1000+' secs');
                    rl.close();
                }
                else
                {
                    console.log("please enter 'stop' to stop the stop-watch");
                    rl.close();
                }
            })
        }
        else
        {
            console.log("try again and enter 'start' to start the stop-watch.");
            rl.close();
        }
    });
}
/*
*calling the test() to start the program execution
*/
test();