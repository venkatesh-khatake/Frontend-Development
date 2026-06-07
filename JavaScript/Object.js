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