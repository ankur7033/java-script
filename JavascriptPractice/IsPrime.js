let num = 21;
let b = false;
for(let i =2;i<=(num/2);i++){
    if(num%i==0){
        console.log("not prime")
        b = true;
        break;
    }
}
if(b == false)console.log("prime")