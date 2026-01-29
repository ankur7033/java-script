let str = "amaamkhatahai"
let freq = {}

for(let ch of str){
    freq[ch]= (freq[ch]||0)+1
}
let ans =''
for(let ch of str){
    if(freq[ch]===1){
        ans = ch
        break
    }
}
console.log(ans)
