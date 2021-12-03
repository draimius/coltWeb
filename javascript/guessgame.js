// guess game want :
// dificulty aka number of digits(cm provides via prompt)
// posibly have it select a random number = secret code (with its own messeage)
// we wnat it to print the number of guesses it took us [ how can i do that????]
// 
// 
// 



// parseInt to insure were getting valid input this case a integer/number and not simply a space,nothing,or letters/symbols
let max = parseInt(prompt("enter your maximum number"));
// cheking when it dosent match data type wanted prompts again for valid input
    // max being the max number the random number can be "target"
while(!max){
    max = parseInt(prompt("enter valid number"));
}

let target = Math.floor(Math.random() * max) + 1

// this is how we counted the attempts creat varible starting at 1 
// now becuse it exist within loop with ++ everytime the loop is ran it will update variable to the number of attempts 
// 1 being 1st then + any additional loops aka attempts= total attempts (will continue to run/count until guess corectly or quit)
let attempts = 1;


let guess = prompt("guess the random number")
// condition of loop as long as the guess dosent eaqual target(correct awnser) loop will continue to run UNTIL correct answer is input
    // important note as well is the parseInt will convert data type to compare on same level/type(kinda like giving it the same denominator )
    // other wise we'd be comparing a string and a number whos values would never match of uless same type
while(parseInt(guess) !== target){
    // we are counting attempts and updateing said variable
    attempts++;
    // here we are assigning are keyword to "break" out of the loop and quit the game
    if(guess === "q") break;
    // here setting parameters to give hint if greater than say to high and guess again(all the while the guess variable is being updated)
    if(guess > target){
        guess = prompt("too high. guess again");
    } 
    // agian parameters to give hint if less than say to low and guess again(this only runs if parameter above isint met)
    else{
        guess = prompt("too low. guess again");
    }
}
// here now were outside the loop
// here we want to give masseage when user chooses to break out loop(so we check if guess = the keyword)
if(guess === "q"){
    console.log("game quit")
}
// and here if user exits loop by thier guess/input no longer meeting parameter for loop to run (it will no longer run and jump out the loop)
// now out the loop checks for keyword if no keyword goes to next option )bieng completion of game and get message for that too
else {
    console.log(`answer is ${target} noice you got it. Took you ${attempts} attempts`);
}
















