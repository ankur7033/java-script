const timer = document.querySelector('#timer');
const redButton = document.querySelector('#red');
const whiteButton = document.querySelector('#white');
const greenButton = document.querySelector('#green');

function getRandom(max){
    return Math.floor(Math.random()*max);
}
console.log(getRandom(2));


let timeLeft = 10;
setInterval(()=>{
    timer.textContent = timeLeft;
    timeLeft--;

    if(timeLeft<=0){
        timeLeft=10;
        setInterval()
    }
},1000)





