let tens = 00;
let seconds = 00;
let minutes = 00;
let getTens = document.querySelector(".tens");
let getSeconds = document.querySelector(".seconds");
let getMinutes = document.querySelector(".minutes");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

btnStart.addEventListener('click',()=>{
    interval = setInterval(startTimer, 10)
})
btnStop.addEventListener('click',()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens = 0
    seconds = 0
    minutes = 0
    getTens.innerHTML = "0" + tens;
    getSeconds.innerHTML = "0" + seconds;
    getMinutes.innerHTML = "0" + minutes;
})
function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0
        getTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = "0" + minutes;
        seconds = 0
        getSeconds.innerHTML = "0" + 0;
    }
    if(minutes > 9){
        getMinutes.innerHTML = minutes;
    }
    if(minutes > 59){
        minutes = 0
        getMinutes.innerHTML = "0" + 0;
    }
}