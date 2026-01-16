const name = "ram";
const age = 25;
const id = 1;

console.log("My name is "+name+ " and my age is "+age);
console.log(id+name+age);
console.log(id+""+age+name);

console.log(`My name is ${name} and my age is ${age} and my id is ${id}`)

const nameOfPerson = new String("Mahendra");
console.log(nameOfPerson.length)
console.log(nameOfPerson[4])
if(nameOfPerson.endsWith('a'))console.log(true)