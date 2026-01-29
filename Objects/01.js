const mySym = Symbol("key1")

const obj = {
    name:"Ankur",
    "full name":"Ankur Kumar",
    age:22,
    location:"Bengaluru",
    email:"ankur@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]:"myKey1"
}

// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj["full name"])
// console.log(obj[mySym])

obj.name = "Mohan"
// console.log(obj.name);

// Object.freeze(obj)
obj.name = "Sohan"
// console.log(obj.name); // name will not be changed because obj is freesed

obj.greeting = function(){
    console.log("hello")
}

// console.log(obj)
console.log(obj.greeting())

obj.greeting2 = function(){
    console.log(`My name is ${this.name}`) 
}
console.log(obj.greeting2())
console.log(obj)


// Object destruction

const course = {
    coursename :"js in hindi",
    price : 999,
    courseInstructor:"hitesh"
}

const{courseInstructor:instructor}=course
console.log(instructor)

const{courseInstructor}=course
console.log(courseInstructor)