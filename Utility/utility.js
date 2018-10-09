/*************************************************************************
 * @description :making utility file functions so that it can be used by other methods
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/**
 * @param {number}userinput is a string 
 * this code snippet is used to print something if the length of the username is more than 3  
 */
function username (userinput)
{
    if(userinput.length>=3)
    console.log("Hello "+ userinput+"! How are you");
    else
    console.log("Enter atleast 3 characters");
}
/**
 * @param {number}no is how many time you want to flip the coin. 
 * this code snippet is used to print the persentage of heads and tails 
 * when the coin is fliped 'no' times. 
 */
function flipCoin(no)
{
    var head=0;
    var tail=0;
    for(var i=0;i<no;i++)
    {
        if(Math.random()<0.5)
            head++;
        else
            tail++;
    }
    console.log("percentage of head "+head/no*100);    
    console.log("percentage of tail "+tail/no*100);
}
/**
 * @param {number}y is year
 * this code snippet is to print if passed year is a leapyear or not 
*/
function LeapYear(y)
{
    if(y%400==0||y%100!=0&&y%4==0)
        console.log(y+' is a leap-year.')
    else
    console.log(y+' is not a leap-year.')
}
/**
*@param {number} n is the upper limit of pow of 2 tabel you want.
*this code snippet is to create the table of power of 2 
*/
function powOf2(n)
{
    var pow=1;
    for(var i=0;i<=n;i++)
    {
      pow=pow*2;
      console.log('2 to the power '+i+' ='+pow);  
    }
}
/**
*@param {number} n is the nth term 
*this code snippet is to print the nth harmonic value.  
*/
function harmonic(n)
{
    var nth=1.0;
    for(var i=2;i<=n;i++)
    {
        console.log(parseFloat(1/i));
        nth=parseFloat(nth+parseFloat(1/i));
    }
    console.log(n+'th harmonic value is='+nth);
}
/**
*@param {number}no is the number of which prime factors you want
*this code snippet is to print the prime factors of any numbers 
*/
function factors(no)
{
    console.log('The prime factors for the '+ no+' are:');
    var i=2;
    var s="";
    while(i*i<=no)
    {
        while(no%i==0)
        {
            s=s+i+' ';
        //console.log(i+' ');
        no=no/i;
        }
        i++;
    }
    if(no>1)
    {
        s=s+no;
    //console.log(no);
    }
    console.log(s);

}
/**
 *this code snippet is to print win and loss persentage of a gambler  
 * @param {number} stock 
 * @param {number} goal 
 * @param {number} no 
 */
function gambler(stock,goal,no)
{
    var no1=no;
    var wins=0;
    var loses=0;
    while(stock>0&&no>0)
    {
        if(Math.random()>0.5)
        {
                stock++;
                no--;
                wins++;
        }
        else
        {
                stock--;
                no--;
                loses++;
        }
        if(stock==goal)
        {
            console.log('you have reached your goal\nand you have played ',(no1-no),' times');
            console.log('percentage of win ='+wins/(no1-no)*100);
            console.log('percentage of lost ='+loses/(no1-no)*100);        
            process.exit(0);
        }
    }
    console.log('percentage of win ='+wins/no1*100);
    console.log('percentage of lost ='+loses/no1*100);
}
/**
*@param {number} n is how many coupon you need
*this code snippet is to create distinct coupon 
*using random number in between o to 999
*/
function coupon(n)
{
    var no=0;
    var distinct=new Set();
    while(distinct.size<=n)
    {
        var i=Math.floor(Math.random()*1000+10000);
        distinct.add(i);
        no++;
    }
    console.log('total random no needed to have '+n+' distinct coupon is:'+no);
}
/**
*@param {Array} arr is the array of no in which you want to search for triplets
*this code snippet is to print the triplets whose sum is equal to 0 
*/
function triplets(arr)
{ var count=0;
  var size=arr.length;  
    console.log('triplets are:');
    for(var i=0;i<size-2;i++)
    {
        for(var j=i+1;j<size-1;j++)
        {
            for(var k=j+1;k<size;k++)
            {
                if(arr[i]+arr[j]+arr[k]===0)
                {
                    count++;
                    console.log(arr[i]+' '+arr[j]+' '+arr[k]);
                }
            }
        }    
    }
    console.log('the number of distinct triplets are:'+count);
}
/**
*@param {number} x 
*@param {number} y 
*x and y are the geometric position
*and this code snippet is to print the euclidean distance fom origin (0,0) to (x,y)
*/
function distance(x,y)
{
    var a,b;
    a=parseInt(x);
    b=parseInt(y);
    var dis=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
    console.log('The euclidean distance from '+a+','+b+' to origin (0,0) is='+dis);
}
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 */
function quadratic(a,b,c)
{
    var delta=Math.pow(b,2)-4*a*c;
    if(delta>0)
    {
        var root1=(-b+delta)/2*a;
        var root2=(-b-delta)/2*a;;
        console.log('root1= '+root1+'\nroot2= '+root2);
    }
    else
    {
        console.log('both the roots are imaginiry')
    }    
}
/** 
*@param {number} t 
*@param {number} v 
* t and v are the temp and speed of wind
*this code snippet is to print the windchill with the help of temperature and
*wind speed as t and v 
*/
function windChill(t,v)
{
    var t,v;
    this.t=parseInt(t);
    this.v=parseInt(v);
    var windChill=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
    console.log('WindChill='+windChill);
}
/**
* @param {number} n is the no of which factorial you need
* @returns {number} fact
*/
function factorials(n)
{
    var fact=1;
    //var n;
    //this.n=parseInt(n);
    if(n==0)
    {
        return 1;
    }
    else
    fact=n*factorials(n-1);
    return fact;
} 
/**
 * 
 * @param {Array} str 
 * @param {number} l left most index 
 * @param {number} r right most index
 */
function permutation(str,l,r)
{
    
    if (l == r)
    { 
    //    count++;
        console.log(str.join().replace(/\,/g,""));   // to replace ',' with ""replace(/\,/g,"")

    //    System.out.print(count+" ");
    } 
    else
    { 
        for (var i = l; i <= r; i++) 
        { 
            str = swap(str,l,i); 
            permutation(str, l+1, r); 
            str = swap(str,l,i); 
        } 
    } 

}
/**
 * 
 * @param {Array} str 
 * @param {number} i index
 * @param {number} j index
 */
function swap(str,i,j){
    var temp=str[i];
    str[i]=str[j];
    str[j]=temp;

    return str;
}
/**
 * this code snippet is to implement 2d array in js
 * here we are besically spliceing an array and then pusing that array into another array
 * using array.splice() and array.push() 
 * @param {number} rows 
 * @param {number} columns 
 * @param {array} arr1 
 */
function twoDArray(rows,columns,arr1)
{
    var arr=new Array();
    /*for(var i=0;i<columns;i++)
    {
        arr[i]=new Array(rows);
    }
     console.log(arr);*/
    // console.log(arr1); 
    console.log('two d array-->');
    for(var i=0;i<rows*columns;i=i+columns)
    {
        arr.push(arr1.slice(i,i+columns));
    }
    console.log(arr);
}
module.exports = {
    factorials,
    username ,
    flipCoin,
    LeapYear,
    powOf2,
    harmonic,
    factors,
    gambler,
    coupon,
    triplets,
    distance,
    quadratic,
    windChill,
    twoDArray,
    permutation,
    swap
}