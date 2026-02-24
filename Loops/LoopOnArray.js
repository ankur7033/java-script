// FOR EACH

const arr = ["js", "python", "java", "cpp", "ruby"]

arr.forEach(function(item){
    console.log(item);
})

arr.forEach((item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}
arr.forEach(printMe);

arr.forEach((item, index, arra)=>{
    console.log(item, index, arra);
})



// for each on array of objects

const arr2 = [
    {
        languagename:"java",
        filename:"java"
    },{
        languagename:"python",
        filename:"py"
    },
    {
        languagename:"java script",
        filename:"js"
    }

]

arr2.forEach((item)=>{
    console.log(`language name is ${item.languagename} and file name is ${item.filename}`)
})