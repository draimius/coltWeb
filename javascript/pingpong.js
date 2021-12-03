// KEEPING TRACK OF PLAYES SCORES
// let p1Score = 0;
// let p2Score = 0;
// SELECTING SPAN'S
// const span1 = document.querySelector(`#score1`)
// const span2 = document.querySelector(`#score2`)
// // SELECTING BUTTONS 
// const button1 = document.querySelector(`#p1`)
// const button2 = document.querySelector(`#p2`)
const buttonReset = document.querySelector(`#reset`)
// WINIG SCORE SET
winScore = 3;
// let winScore = select.value;
// SETIING GAMEOVER
let gameOver = false;
// SELECTING SSELECT FOR WINING SCORE
const select = document.querySelector(`select`)
// // BUTTON 1 EVENT
// button1.addEventListener(`click`, function (e) {
//     if (!gameOver) {
//         p1Score += 1;
//         span1.innerText = p1Score;
//         if (p1Score === winScore) {
//             gameOver = true;
//             span1.classList.add(`green`)
//             span2.classList.add(`red`)
//         }
//     }
// })
// // BUTTON 2 EVENT
// button2.addEventListener(`click`, function (e) {
//     if (!gameOver) {
//         p2Score += 1;
//         span2.innerText = p2Score;
//         if (p2Score === winScore) {
//             gameOver = true;
//             span2.classList.add(`green`)
//             span1.classList.add(`red`)
//         }
//     }
// })

// // RESET BUTTON EVENT - got move into its own function**
// buttonReset.addEventListener(`click`, function (e) {
//     gameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     span2.innerText = p2Score;
//     span1.innerText = p1Score;
// })

// ATTEMT SELECTING PARENT ELEMENT TO AVIOD BUBLING=========
select.addEventListener(`change`, function (e) {
    winScore = parseInt(select.value);
    reset();
})
// ADDING EVENT LISTENER FOR FUNCTION -instead of fenining function simply paasin as predifine in functions place
buttonReset.addEventListener(`click`, reset)
// RESET FUNCTION
// function reset() {
//     gameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     span2.innerText = p2Score;
//     span1.innerText = p1Score;
//     span1.classList.remove(`green`, `red`);
//     span2.classList.remove(`green`, `red`);
// }


// NOTES - set all varibles you can upfront set to zero if need 
// then when called in functions those values can be upodated 
// -[without having to use const of let again since they've previously been difined we are just updating the value]
// alos u have to think about what will occur first as to say winscore that at zore from start 
// -not good if im calling that value in other function but becuse user must choose the winScore
// -before they can add to the score that value gets difined before any incrementation
// -aka adding to scores happends.


// CLEANING UP CODE === eliminating redundence
const p1 = {
    score: 0,
    button: document.querySelector(`#p1`),
    display: document.querySelector(`#score1`),
}
const p2 = {
    score: 0,
    button: document.querySelector(`#p2`),
    display: document.querySelector(`#score2`),
}

function updateScores(player1, opponenet) {
    if (!gameOver) {
        player1.score += 1;
        player1.display.innerText = player1.score;
        if (player1.score === winScore) {
            gameOver = true;
            player1.display.classList.add(`green`)
            opponenet.display.classList.add(`red`)
        }
    }
}

p1.button.addEventListener(`click`, function () {
    updateScores(p1, p2);
})
p2.button.addEventListener(`click`, function () {
    updateScores(p2, p1);
})

// function reset() {
//     gameOver = false;
//     p1.score = 0;
//     p2.score = 0;
//     p1.display.innerText = p1.score;
//     p2.display.innerText = p2.score;
//     p1.display.classList.remove(`green`, `red`);
//     p2.display.classList.remove(`green`, `red`);
// }
// BELOW IS ABOVE's LOGIC BUT IN A LOOP
function reset() {
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove(`green`, `red`);
    }
}



