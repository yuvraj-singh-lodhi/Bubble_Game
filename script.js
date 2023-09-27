var timer = 30;
var score =0;
var hitrn =0;


function increaseScore(){
    score+=10;
    document.querySelector("#scorevalue").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent =hitrn;
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
            document.querySelector("#panel-bottom").innerHTML = `<h1 id="gameover">Game Over</h1> <br/><h1 id="Score">Your Score = ${score}</h1>  <br/><button id="retry">Retry</button>`
            document.querySelector("#retry").addEventListener("click",function(button){
                
                console.log(button.target.textContent);
                var clicktry  = button.target.textContent;
                if(clicktry = "Retry"){
                        makeBubble();
                        getNewHit();
                        score= -10;
                        increaseScore();
                        timer=31;
                        runTimer();
                }
                else{
                    clearInterval(timerint);   
                   
                }
                });
            
        }

    },1000);
}


document.querySelector("#panel-bottom").addEventListener("click",function(dets){
    var clickedNum= Number(dets.target.textContent);
    if(clickedNum ===hitrn ){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
// runTimer();
makeBubble();
getNewHit();
// runTimer();