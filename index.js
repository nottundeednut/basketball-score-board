let homeScores = document.getElementById("home-scores")
let guestScores = document.getElementById("guest-scores")

//score counter
let score1 = 0
let score2 = 0

//home board
//add 1
function homeAdd1(){
    score1 +=1
    homeScores.innerText = score1
}
//add 2
function homeAdd2(){
    score1 +=2
    homeScores.innerText = score1
}
//add 3
function homeAdd3(){
    score1 +=3
    homeScores.innerText = score1
}

//guest board
//add 1
function guestAdd1(){
    score2 +=1
    guestScores.innerText = score2
}
//add 2
function guestAdd2(){
    score2 +=2
    guestScores.innerText = score2
}
//add 3
function guestAdd3(){
    score2 +=3
    guestScores.innerText = score2
}