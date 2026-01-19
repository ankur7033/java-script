let str = "indresh";
let newStr = "";
for( let i =str.length;i>=0;i--){
    newStr+=str.charAt(i);
}
// console.log(newStr);

let str2 = str.split("")
let n = str2.length;
let i =0;
let j =n-1;
while(i<j){
    let temp = str2[i];
    str2[i]=str2[j];
    str2[j] = temp;
    i++;
    j--;
}
let str3 = str2.join("");
console.log(str3);
