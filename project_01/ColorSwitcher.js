const grey = document.querySelector('#grey')
// grey.addEventListener("click",changeColor);
grey.addEventListener("click", () => {
    const color = window.getComputedStyle(grey).backgroundColor;
    changeColor(color);
});

const white = document.querySelector('#white')
// white.addEventListener("click",changeColor);
white.addEventListener("click", () => {
    const color = window.getComputedStyle(white).backgroundColor;
    changeColor(color);
});

const blue = document.querySelector('#blue')
// blue.addEventListener("click",changeColor);
blue.addEventListener("click", () => {
    const color = window.getComputedStyle(blue).backgroundColor;
    changeColor(color);
});

const yellow = document.querySelector('#yellow')

yellow.addEventListener("click", () => {
    const color = window.getComputedStyle(yellow).backgroundColor;
    changeColor(color);
});
function changeColor(color){
    // const colorname=window.getComputedStyle(grey).backgroundColor
    document.querySelector('body').style.backgroundColor = color;
}

