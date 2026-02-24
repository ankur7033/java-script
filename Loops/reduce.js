const arr1 = [1,2,3]
const init = 0;

let sum = arr1.reduce(
    function(acc,curr){
        return acc+curr;
    },init
)
//OR
 sum = arr1.reduce((acc,curr)=>curr+acc,init);
console.log(sum)