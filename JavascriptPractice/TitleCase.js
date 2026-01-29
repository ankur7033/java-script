let str = "ram aam khata hai"
let ansStr = ""

function capital(c){
    return c.toUpperCase();
}
ansStr+=capital(str.charAt(0))
for(let i =1;i<str.length;i++){
    if(str.charAt(i-1)==" "){
        ansStr+=capital(str.charAt(i))
        continue
    }
    ansStr+=str.charAt(i)
}
console.log(ansStr)