function calculator(a,b,operation){
   return operation(a,b);
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
console.log(calculator(3,4,multiply))



