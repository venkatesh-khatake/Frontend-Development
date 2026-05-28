// example of Pure function 

// function sum(a,b){
//     return a + b;
// }

// console.log(3,3)

// // example of Impure function

// let count = 1;

// function increment(){
//     count++;
   
// }
// increment()
// increment()
// increment()
// increment()

// console.log(count)



function acceptMultiNum(...num){
    console.log(...num);
}
acceptMultiNum(1,2,3,4,5,6)

function add(...num){
let sum = 0;
    for(let i = 0; i<= num.length-1; i++){
        sum += num[i]
    }
    return sum;
}
console.log(add(1,2,3,4,5))

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1, ...arr2];
console.log(arr3)


let greet = ()=>{
    console.log("Hello")
}
greet()

function processUser(fn){
    fn();
}
processUser(greet)

function multiply(a,b){
    return a * b;
}

let count = 0;

function increment(){
   return count++;
}
increment();
console.log(count)
increment();
console.log(count)




