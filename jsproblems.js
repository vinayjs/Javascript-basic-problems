//1-write a js program to check whether two numbers and return true if one of the number is 100 OR if the sum of the two numbers is 100.

const isEqualto100 = (a,b)=> a===100||b===100||(a+b)===100;

console.log(isEqualto100(100,0));
console.log(isEqualto100(28,58));

//2-write a jawascript program to get the extension  of a filename.

const getFileExtension =(str)=> str.slice(str.lastIndexOf('.')+1);

console.log(getFileExtension('index.html'));
/*
//3- Write a jawascript program to replace every  character in a given string with the chacarcter following it in the alphabet.
//String.fromCharCode
//charCodeAt

const moveCharsForward = (str)=>
str
.split('')
.map(char=>String.fromCharCode(char.charCodeAt (0)+(1)))
.join('');

console.log(moveCharsForward('abcd'));

//4-Wite a jawascript program toget the current date.

const formatDate =(date=new Date())=>{
    const days = date.getDate();
    const months = date.getMonth()+1;
    const years = date.getFullYear();
    return`${days}/${months}/${years}`;
}
console.log(formatDate());

//5- write a jawascript program to create a new string adding "New!" In front of a  given string .if the given string begins with "New!" already then return the orginal string.

const addNew =(str)=>
     str.indexOf('New!')===0 ? str : `New! ${str}`;

     console.log(addNew('Offers'));
     console.log(addNew('New! Offers'));
     


     //6- write a js program to create a new string from a given string taking the first 3 characters and the last three cahrecters of a string and adding them together. the string length must be 3 or more, if not the orignal string is returned.
const makeNewstring = (str)=>
str.length<3 ? str:str.slice(0,3)+ str.slice(-3);

console.log(makeNewstring('abcdefghij'));
    
//7 write a jawascript program to extract the first half of a string of even length.

const firstHalf = (str)=> str.slice(0,str.length/2);

console.log(firstHalf('temple'));

//8 write a jawascript solution to concatenate two strings except their first character.

const stringOne = (str1,str2)=>
str1.slice(1)
*/

// js to find the number of even numbers in a an array.
const countEvenNumbers = (arr)=>
arr.filter(num=> num%2 ===0).length;


console.log(countEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

//write a jawascript program to find the number of even values upto a given number.

const createArrayofNumbers = (num)=>{
    const returnArray =[];
    for(let i = 1;i<=num;i+=1){
        returnArray.push(i);
    }
    return returnArray;
}

//js to check whether a given array of integers is sorted in ascending order.
const isAscending =(arr)=>{
    for (let i =0; i< arr.length;i+=1){

        if(arr[i+1]< arr[i])return false;
    }
    return true;
}

console.log(isAscending([2,4,6,8,10,12]));
console.log(isAscending([10,9,8,7,6,5,4]));

//JS to get the largest even number from an array of integers.

const largestEvent = (arr)=>
    Math.max(...arr.filter(num=> num%2===0));
    console.log(largestEvent([2,4,6,8,10,12]));


    //Given a year , report i f it is a leap year.

    const isLeap = (year)=> year % 4 ===0;
        
//write js func that returns a passed string with letters in alphabetical order.

const alphabeticalOrder=(str)=> 
str.split('').sort((a,b)=> a> b? 1:-1).join('');


console.log(alphabeticalOrder('SUBU'));

//write a js func that accepts a string as a  parameter and counts the number of vowels within the string.

const countLetters =(
    str,letters =['a','e','i','o','u'])=>
    str.split('').filter(b=>letters.indexOf(b)>-1)
    .length;

    console.log(countLetters('nijien'));