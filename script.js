var timer = 60;
var score =0;



function increaseScore(){
    score+=10;
    document.querySelector("#scorevalue").textContent = score;
}
function getNewHit(){
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent =rn;
}
function makeBubble(){
    var clutter = "";

for(var i=1;i<103;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter  += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panel-bottom").innerHTML = clutter;
}
function runTimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerint);
        }

    },1000);
}

runTimer();
makeBubble();
getNewHit();
