// function print(){
//    {
//     var name = "Venkey";
//     console.log("Inside the block",name);
//    }
//    console.log("Inside the Function : ",name);

// }
// print()
// console.log("Outside the function : ",name)

var a = 10;

function abc(){
   console.log(a);
   var a = 20;
}

abc()