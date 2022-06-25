/*
function fact(n) {
    if (n==0){
        return 1;
    }else {
         return n * fact(n-1);
    }
}
console.log(fact(5));



//const numbers = [1,2,3,4,5,6];
 //numbers.reverse();
 //console.log(numbers);

 let audi =[1,2,3,4,5,6];
let fbd= [...audi].reverse();


 console.log(audi);
console.log(fbd);

 let str = 'vinay'
 let strrevrse= str.split('').reverse().join('');

 console.log(strrevrse);


 let num = [24,12,34,24,55,34];

 let bd = [];

 for(let i = 0; i< num.length; i++){
        if(bd.indexOf(num[i])==-1){
            bd.push(num[i]);
        }
        
    };
    console.log(bd);


    let cars = ["audi","benz","ferrari"];
    for (let i = 0 ; i < cars.length ;i++){
        console.log(cars[i]);
    }
    

for (let i = 0 ; i <+100; i++ ){
    if( i % 2 ==0){
        console.log(i);
    }
}



let numEven  = function(x){
    if (x%2==0){
        return true;
    }else return false;
};
 console.log(numEven(24));
 console.log(numEven(27));




 

const reArrange = (str)=>
str.split('').sort((a,b)=>a>b?1:-1).join('');
console.log(reArrange('vinay'));


const obj = {
    key : "value",
    objct: function(){
        console.log(this.key);
    }
}

const obj2 = Object.create(obj);
obj2.objct();

const evenNumb = (arr)=>
arr.filter(i=> i%2 ===0).length;
console.log(evenNumb([1,2,3,4,5,6,7,8,9,10]));

const obj = {
   1 : 'x',
   2 : 'y',
   3 : 'z',
   4 : 'o'
}

console.log(obj[1]);

delete obj[3];
console.log(obj);
console.log(obj[3]);


console.log(obj.hasOwnProperty(3));
console.log(obj.hasOwnProperty(2));

console.log(Object.keys(obj));

*/
