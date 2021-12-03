// -------- "IF STATMENTS" 
// -- : conditional code only runs if specified result is output Ex. above
console.log("first javascript file ran baby")
// Made this little thing on me own baby lets get it
//         //  Comparisom Conditinal Cxamples

// let die1 = Math.floor(Math.random() * 3) +1
// console.log(die1)
// // if(die1 === 3){console.log("noices")}
// if(die1 === 1){console.log("snake eyes")}
// if(die1 === 2){console.log("dou")}
//         // greater/less then ex.
// if(die1 > 2){console.log("noices")}
//         // stright math ex.
// if(1 + 1 === 2){console.log("one plus one equals two")}

//         // Coin Flip

// let coin = Math.floor(Math.random() * 2) + 1
// console.log(coin)
// if(coin < 2){console.log("heads")}
// if(coin > 1){console.log("tails")}

        // Coin Flip v2 took out Math.floor

// let coin = Math.random()
// console.log(coin)
// if(coin > .55){console.log("heads")}
// if(coin < .55){console.log("tails")}

        // prints even only when even number (even odd use % aka mod/modulus)
// function isEven(num){
//    if(num % 2 === 0){console.log("even")}
// }

// -------- "ELSE IF" : like if but simply another brach besad on diff result
        // -- can have multiple else if statments

// let die2 = Math.floor(Math.random() * 2) + 1
// if(die2 % 2 === 0){console.log("even")} 
// else if(die2 % 2 === 1){console.log("odd")}

// let dayOfWeek = `Sunday`;
// if(dayOfWeek === `Monday`){console.log("monday no diff than anyother day")}
// else if(dayOfWeek === `Tuesday`){console.log(`tueday no diff thatn any other day bro`)}
// else if(dayOfWeek === `Sunday`){console.log(`SUNDAY SUNDAY SUNDAY`)}

// 0-5 - free
// 5-10 childo $10
// 10 -65 adult $20
// 65+ senior $15
        // how can we set thoes perameters ???
            // important we use "else if" and not just multiple if 
            // (if we use just if's code will continue to run and run mutiple conitinal statment and not just the one wanted)   
                // IMPORTANT it run conditinals in order meaning dont have to add range in one but range in sense is buid as it works it way down
                    // Ex. 1st line check "if under 5" then if it reaches 2nd line it check "if under 5 if not is it under 10" then 3rd "if under 5 if not is it under 10 if not is it under 65" 
                        // -- and so forth creat is list of condition checking if met going down the line

// age = prompt("what is your age?")
// if(age < 5){console.log("under 5 get in free")}
// else if(age < 10){console.log("child $10")}
// else if(age < 65){console.log("adult $20")}
// else if(age > 65){console.log("senior discount $10")}

// -------- "ELSE" : if "if is not true and nothing else was true", do this 
        // -- else unlike other is's written "else{}" with curly braces and not "()"

// let card = 6
// if(card === 3){console.log("three")}
// else if(card === 4){console.log("three")}
// else if(card === 5){console.log("three")}
// else{console.log("nothin to se here?")}

        // Ex.2 notice case to avoid issue with case sensative var 

 // let color = prompt(`pick color?`).toLowerCase();
// if(color === "red"){console.log("rojo")}
// if(color === "blue"){console.log("azul")}
// if(color === "green"){console.log("verde")}

//         // When only two option not nessesary two set 2 parameter

// let random = Math.random();
// if(random > .5){console.log("grater then .5")}
// else if(random < .5){console.log("less then .5")}   

//         // can achive samething with simply if and else as only 2 options iether or no other posibility

// let random = Math.random();
// if(random > .5){console.log("grater then .5")}
// else{console.log("less then .5")} 

// -------- NESTING : help to lay everything out(parameters) first you want then nest it as needed
    // inthis example wouldnt use if then else if due to were checking for 2 completly different thing 
        // --one for length and one for contain spaces so we would need two if statment one for each thing
        // --then an output for when meet and dosent again for each if (so written with 2 if and 2 else )
            // note-- we only use else if when checking/testing for samething with dif perameters
        // IMPORTANT - if dosent pass 1st parameter nested code dosent run (and in this case goes stright to )
    // multiple if 2nd if and it else gets nested in the 1st 1st{} curly braces


// pasword must be 6+ characters
// must not contain any spaces 

let pass = prompt("password plz")
if(pass.indexOf(" ") === -1){
    if(pass.length > 5){
        console.log("valid password")
    }
    else{
        console.log("password to short")
    }
}
else{
    console.log("no spaces plz")
}
































// NOTE -- if only when specified value/ use if and elseif when range / use else when only 2 options or after if and else if to denote value didnot match any parameters
// - if comes 1st then elseif 2nd when utilized then last else
// in setting variable just 1 = sign bu when comparing setting perameters we wnat to use 3 === strict equality
