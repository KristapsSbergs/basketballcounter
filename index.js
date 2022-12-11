let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let mainPlusOne = document.getElementById("plus-one")
let mainPlusTwo = document.getElementById("plus-two")
let mainPlusThree= document.getElementById("plus-three")

let homeCount = 0
let guestCount = 0

// HOME COUNT

function plusOne(){
    homeCount += 1
    homeScore.textContent = homeCount
}
function plusTwo(){
    homeCount += 2
    homeScore.textContent = homeCount
}
function plusThree(){
    homeCount += 3
    homeScore.textContent = homeCount
}

// GUEST COUNT

function plusOneGuest(){
    guestCount += 1
    guestScore.textContent = guestCount
}
function plusTwoGuest(){
    guestCount += 2
    guestScore.textContent = guestCount
}
function plusThreeGuest(){
    guestCount += 3
    guestScore.textContent = guestCount
}