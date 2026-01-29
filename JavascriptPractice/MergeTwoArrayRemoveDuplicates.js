let arr1 = [4,5,6,8,8,5,3,3,7,8]
let arr2 = [3,4,5,6,8,8,6,5,3,2,5,6]

let set = new Set()
for(let i =0;i<arr1.length;i++){
    set.add(arr1[i])
}
for(let i =0;i<arr2.length;i++){
    set.add(arr2[i])
}
console.log([...set])