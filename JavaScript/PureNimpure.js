// example of Pure function 

function sum(a,b){
    return a + b;
}

console.log(3,3)

// example of Impure function

let count = 1;

function increment(){
    count++;
    return count;
}
increment()
increment()
increment()
increment()

console.log(count)