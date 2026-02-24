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

const myTotal = arr1.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);