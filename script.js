let startGame = document.getElementById('startGame');
let restartGame = document.getElementById('restartGame');
let resultShow = document.getElementById('resultShow');
let Hints = document.getElementById('Hints');



startGame.addEventListener('click', play);
restartGame.addEventListener('click', () => { 
    location.reload(); 
   
});



function play(){

var numberOfWin = 0;
var numberOfLoss = 0;
var chanceLeft = 3;


    for(var i = 1; i<=3; i++){
    
    var guessNumber = parseInt(prompt("Enter your numbers:"));
    var randomNumber = Math.floor(Math.random()*10 + 1);

    if(guessNumber == randomNumber){

        alert("You won!");
        numberOfWin++;
        chanceLeft--;
    }

    else if(guessNumber < randomNumber){

        alert("Opps! Correct answer is greater");
        
        numberOfLoss++;
        chanceLeft--;
    }

    else if(guessNumber > randomNumber){

        alert("Opps! Correct answer is smaller");
        
        numberOfLoss++;
        chanceLeft--;
    }
    else{

        console.log("Opps! random number was "+ randomNumber);
        numberOfLoss++;
        chanceLeft--;

    }
}

resultShow.innerText = `You have lost = ${numberOfLoss} and won = ${numberOfWin} \n Chances left = ${chanceLeft} `;

document.getElementById("startGame").disabled = true;

}




