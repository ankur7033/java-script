let str = "madam";

let i =0;
let j =str.length-1;

let b = true;
while(i<j){
    if(str.charAt(i)!=str.charAt(j)){
        console.log("not pelindrome");
        b = false;
        break;
    }
    i++;
    j--;
}
if(b == true)console.log("it is pelindrome");