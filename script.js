var totalScore0 = document.getElementById("totalScore0")
var totalScore1 = document.getElementById("totalScore1")
var currentScore0 = document.getElementById("currentScore0")
var currentScore1 = document.getElementById("currentScore1")


var winScore = prompt("Napište, do jakého skóre chcete hrát.")

if(winScore < 1){
    location.reload()
}


totalScore0.textContent = "0"
totalScore1.textContent = "0"
currentScore0.textContent = "0"
currentScore1.textContent = "0"

let activePlayer = 0
let currentScore = 0
let totalScore = [0,0]

var rollDiceBtn = document.getElementById("btn1")
document.querySelector("img").style.visibility = "hidden"

rollDiceBtn.addEventListener("click", rollDice)

function rollDice(){
    let dice = Math.ceil(Math.random()*6)
    document.querySelector("img").style.visibility = "visible"
    document.querySelector("img").src = "./images/" + dice +".jpg"
    
    if(dice !== 1){
        currentScore = currentScore + dice
        document.querySelector("#currentScore" + activePlayer).textContent = currentScore
    }
    else{
        nextPlayer()
    }  
}

function nextPlayer(){
    if(activePlayer == 0){
        activePlayer = 1
    }
    else{
        activePlayer = 0
    }

    currentScore = 0
    currentScore0.textContent = 0
    currentScore1.textContent = 0

    document.querySelector(".player0").classList.toggle("active")
    document.querySelector(".player1").classList.toggle("active")
}

var holdScore = document.getElementById("btn2")
holdScore.addEventListener("click", function(){
    
    totalScore[activePlayer] = totalScore[activePlayer] + currentScore
    document.querySelector("#totalScore" + activePlayer). textContent = totalScore[activePlayer]

    if(totalScore[activePlayer] >= winScore){
        //přidání nadpisu s výhercem
        var board = document.querySelector(".board")
        var winnerHeading = document.createElement("h1")
        winnerHeading.textContent = "Vyhrál hráč " + activePlayer
        winnerHeading.style.padding = "1em"

        document.body.insertBefore (winnerHeading, board)
        alert("Vyhrál hráč " + activePlayer)
    }
    else{
        nextPlayer()
    }
})

document.getElementById("btn3").addEventListener("click", function(){
    location.reload()
})
