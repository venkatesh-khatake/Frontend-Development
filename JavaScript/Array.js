let arr = ["Apple","Banana","Mango"];
console.log(arr)

arr[3] = 'Grapes';
console.log(arr)   //add a new value at  the place of  defined index


arr[1] = "Lichi";

arr.push("Dragon Fruit","papaya") // adds value at the end of an array
console.log(arr);

 let removed = arr.pop(); // removes last element from an array
 console.log(removed);

 console.log(arr.length)

console.log( arr.includes("Grapes"))

console.log(arr.indexOf('Lichi'))

let arr2 = arr.slice(0,3)
console.log(arr2)

console.log(arr)
console.log(arr.slice(2))


let numbers = [1,2,3,4,5,6,7]

numbers.forEach(function(num){
    console.log(num)
})

