function greet(){
    console.log("Hello :",this.name)
}

user1 = {
    name:"Venkatesh",
    show:greet
}
user1.show()

user2 = {
    name:"Tejaswini",
    show:greet
}
user2.show()

user3 = {
    name : "Kiran"
}

user3.greet()