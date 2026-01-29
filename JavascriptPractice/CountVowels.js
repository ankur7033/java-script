let str = "raam aam khata hai"

let isVowel = function(char){
    let st = "AEIOUaeiou"
    for(let i =0;i<st.length;i++){
        if (char == st.charAt(i))return true;
    }
    
}
let count = 0;
for(let i =0;i<str.length;i++){
    if(isVowel(str.charAt(i))==true)count++;
}
console.log(count)