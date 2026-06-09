const person = {
    name: "Venkatesh",
    age : 25,
    city : "Pune",
    greet:function(){
        console.log("Hi",this.name);
    }
}

// Dot Notation to access Properties
console.log(person.name)

// Bracket Notation to access Properties
console.log(person["age"])

// Adding  new Properties : 

// person.isStudent = true;

person["isStudent"] = true;
console.log(person)

// deleting Properties 

delete person.age;
console.log(person)

const {name,age,city,greet} = person;

console.log(name)
person.greet();


const student = {
    name : "Venkatesh",
    age : 22,
    address : {
        city : "Pune",
        state : "Maharashtra",
        country : "India",
        
    }
}

console.log("Address : ",student.address.pincode)

console.log(Object.keys(student))

Object.keys(student).forEach(function(key){
    console.log(key,student[key])
})