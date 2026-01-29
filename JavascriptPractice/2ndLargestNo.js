let arr = [3,4,5,6,7,8,2]

let max = 0;
let secondMax = arr[0]
for(let i =0;i<arr.length;i++){
    let temp =arr[0]
    if(temp<arr[i])secondMax = arr[i]
    if(secondMax>max)max = secondMax
}
console.log(secondMax)