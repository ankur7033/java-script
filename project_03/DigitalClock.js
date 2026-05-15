
    const clock = document.querySelector('#time');
    function displayTime(){
        let date = new Date();
        clock.value = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    }
displayTime();
setInterval(displayTime,1000)