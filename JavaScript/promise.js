// let promise = new Promise((resolve,reject)=>{
//     resolve("Success");
//     reject("Failed");
// })

// promise.then((result)=>{
//     console.log(result);
// });



// const promise = new Promise(function(resolve, reject){
//     console.log("hello")
// })

// console.log("Start");

// const promise = new Promise((resolve,reject)=>{
// console.log('inside Promise');
// })
// console.log("End")


// function greet(){
//     console.log("Hello");
//     greet()
// }


// console.log("Start");

// setTimeout(()=>{
//     console.log("Timer");
// },0);

// Promise.resolve().then(()=>{
//     console.log("Promise");
// });

// console.log("End")



// console.log("Start");

// const promise = new Promise((resolve) => {
//     console.log("Inside Executor");
//     resolve("Success");
//     console.log("After Resolve");
// });

// promise.then((result) => {
//     console.log(result);
// });

// console.log("End");



const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JS");
const p4 = Promise.resolve("React")

Promise.all([p1,p2,p3,p4])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error)
})
