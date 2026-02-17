const arr = [2,3,4,45,6]

for(const a of arr){
    // console.log(a)
}

const str = 'Hello world!'
for (const s of str){
    // console.log(s)
}

const map = new Map()
map.set(1,'Indresh')
map.set(2,'Aman')
map.set(3,'Ankur')
for (const[key,value]of map){
    console.log(key+' => '+value)
}
console.log(map)

const obj = {
    id:"01",
    name:"Sarthak",
    dept :"AEIE"
}

for(const key in obj){
    console.log(key +' and value is '+obj[key])
}

// using 'For in ' in array
const array = [2,3,4,5,6,7,8,8,9]
for(const element in array){
    console.log(element)
}