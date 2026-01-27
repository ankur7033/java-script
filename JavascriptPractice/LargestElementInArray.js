let arr = [3, 5, 7, 2, 8, 1];

let min  = arr[0];
for(let i =1;i<arr.length;i++){
    if(arr[i]>min)min = arr[i];
}
console.log(min);