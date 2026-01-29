function sayHello(){
    console.log("hello")
}
sayHello()

function addNumbers(num1,num2){
    return num1+num2;
}
addNumbers(4,6)   // it will not print anything 
console.log(addNumbers(4,6))

function loginUserMessage(username="sam" ){ // sam is default username
    if(!username){return `please enter username`} // or we can use if(username === undefined)
    return `${username} just logged in`;
}
console.log(loginUserMessage("Ankur"))
console.log(loginUserMessage()) 