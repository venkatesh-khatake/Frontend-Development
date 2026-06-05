// Map()

let arr = [10,20,30,40];

let arr2 = arr.map(function(val,index){
    return val * 2;
})
console.log(arr2)

let arr3 = arr.map(function(val,index){
    return val + index;
})
console.log(arr3)


// filter()

let num = [1,2,3,4,5,6,7,8];

let even = num.filter(function(val){
    return val % 2 === 0
})

console.log(even)

let odd = num.filter(function(val){
    return val % 2 !== 0
})

console.log(odd)

const users = [
    { name: "John", active: true },
    { name: "Alice", active: false },
    { name: "Bob", active: true }
];

let activeUser = users.filter(function(user){
    return user.active;
})
console.log(activeUser);

let inactiveUser = users.filter(function(user){
    return user.active == false;
})

console.log(inactiveUser)