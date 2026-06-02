// function greet(){
//     console.log("Hello");
// }

// greet()

// let name = "Venkatesh";

// function greet(name){
//     console.log("Hello! ",name)
// }

// greet(name)


// let sum = function(a,b){
//     return(a + b);
// }

// console.log(sum(4,5))


// let hello = (name)=>{
//     console.log("Hello my name is", name);
// }
// hello("Venkatesh");

// let sum = (a,b)=>{
//     return a + b;
// }
// console.log(sum(1,2))


// let multiply = (a,b)=>{
//     return (a * b)
// }

// console.log(multiply(4,5))

// function test() {
//    console.log("Hello");
//    return "World";
// }

// let result = test();

// console.log(result);
// console.log("Result : ",result)

// let count = 0;
// function findVowels(str){
//     str.toLowerCase();
//     for(let i = 0; i <=str.length-1; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||  str[i] == 'o' || str[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// }


// console.log(findVowels("Venkatesh"))



// let count = 0;

// let findVowels = (str)=>{
//     str.toLowerCase();
//     for(let i = 0; i <= str.length-1; i++){
//        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||  str[i] == 'o' || str[i] == 'u'){
//         count++;
//        }
//     }
//     console.log("Count of Vowels : ",count);
// }

// findVowels("Khatake");

// const add = (a,b)=>{
//     a + b;
// }
// console.log(add(3,5))


function sum(a = 0  , b = 0){
    return a + b;
}

console.log(sum(5,4))


function sum(...val){
    let sum = 0;
    for(let i = 0; i <= val.length-1; i++){
        sum += val[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))


function print(...val){
    console.log(val);
}
print(1,2,3,4,6)


let arr = [1,2,4,5]
let arr2 = [7,6,5];
let arr3 = [...arr,...arr2]
console.log(arr3)
console.log(...arr)



function abcd(val){
    val();
}
abcd(function(){
    console.log("Hey")
})