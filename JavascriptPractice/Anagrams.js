let str1 = "fried"
let str2 = "fired"

let obj = {}
for(let ch of str1){
    obj[ch] = (obj[ch]||0)+1
}
for(let ch of str2){
    obj[ch] = (obj[ch]||0)+1
}
for
console.log(obj)