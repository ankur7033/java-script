function calculateCartPrice(val1,val2,...num){
    console.log(val1)
    console.log(val2)
    return num;
}

console.log(calculateCartPrice(200,400,500,600,800))

const student = {
    id : 1,
    name : "Ankur"
}

function handleObjects(anyObjects){
    console.log(`id of the student is ${anyObjects.id} and name of the student is ${anyObjects.name}`)
}
handleObjects(student)
handleObjects({
    id:2,
    name:"indresh"
})

let arr = [2,3,4,5,]
function handleArray(anyArray){
    console.log(`passed array is ${anyArray}`)
}
handleArray(arr)
handleArray([2,3,4,5,5,6])