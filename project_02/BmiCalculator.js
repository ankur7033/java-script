// const heightdiv = document.getElementById("height");
// console.log(heightdiv)

const button = document.querySelector('#calculateBtn');
button.addEventListener('click',read);

const result = document.querySelector('#result');

function read(){
    let height = parseFloat(document.querySelector('#heightInput').value);
    let weight = parseFloat(document.querySelector('#weightInput').value);
    height=height/100;
    let bmi = weight/(height*height);
    result.value = bmi;
}


// const height = parseFloat(heightInput.value);
// console.log(height);

// const weightInput = document.getElementById('weightInput');
// const weight = parseFloat(weightInput.value);
// console.log(weight);