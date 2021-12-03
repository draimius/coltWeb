// -- FUNCTION: reusedble chunks of code javascript is build around it makes code more readable and understandible (wirten way can add input to effect return output)
// DEFINING FUNCTIONS: written - function functionName(){codeWeWantToBeAFunction}
// DONE In @ STEPS
// 1. DEFINE function - "function(space/must be a spece) chosenFunctionLabel() {}"
// note that function or code within will not run unless it is ran
function singBird() {
    console.log("baby, dont worrie")
    console.log("about a thing")
    console.log("cuase every little thing")
    console.log("is gonna be alright")
}
// 2. RUN it - functionLabel()  [only run function after its been declared]
// singBird()


// FUNCTION RETURN VALUES: return allows us to Capture the output of selected function/ also Stops the execution of said function
// - (no code within the function will run after the return) except if its within a if aka only applicable if some parameter is met
// - return will only "return one thing wether thats a number array string ect.."
// Ex.
// notice in return line no "()" where need just argumnet name also insure using a ; at end to close code line
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(5, 12))




// WORING WITH ARGUMENTS: fancy way to say "inputs to a function"| argument  = what goes in the parenteces"()" of a method, function, variable
// variable name is placed in "()" of the functions label | firstName in this case is a "Parameter"
function greet(firstName) {
    console.log(`hii ${firstName}!`)
}
// run with:  | and what is placed withing thouse "()" = and "Argument"
// what ever is input in"()"" in this case is returned in that string 
// note this cn come in handy say instead of "draimius" was a varible potentialy of a updating array or other function ect.. 
// greet("draimius")  //returns - hii draimius!
// greet("jose")  //returns - hii jose!

// MULTIPLE ARGUMENTS: everything decised by order
function greet(firstName, lastName) {
    console.log(`hii ${firstName} ${lastName[0]}!`)
}
// order matters position here corespons to position in function
// greet(`Jose`,  `Ramirez`)
// greet(`Ramirez`,  `Jose`)

// Ex. 
//note parameters always seperated by "," also not all arguments alwyas have to be ran  
function greet(note, times) {
    // set empty sting to concatenate all loop result together in one line 
    let result = " ";
    for (let i = 0; i < times; i++) {
        // its adding noto to note every time the loop is aka then # representing "times"
        // very interesting never thouhgt to add a string to itself like that
        result += note;
        // if consoleLog is left inside the loop will print each sten and loop aka hi then hihi then hihihi all on seperate lines
        // console.log(result)
    }
    // consoeLog outside loop so that only the end result after the addition is printed (oneline) vs. inside 
    console.log(result)
}
// still decided by order this case "hi" = note and 3 = times/ runs function and cosoleLogs desired output
greet("hi", 3)
greet("$", 5)










// FUNCTION EXERCISES
// Exisice #1
// function rant(message){
//     console.log(`${message.toUpperCase()}`)
// }
// rant("i hate beets")
// rant("i hate beets")
// rant("i hate beets")



// how can i uppercase output without doing it to the function 
// function rant(message){
//     console.log(message)
// }

// rant("i hate beets".toUpperCase())
// rant("i hate beets".toUpperCase())
// rant("i hate beets".toUpperCase())



// function rant(message){
//     console.log(`${message.toUpperCase()}`)
// }
// if(let i = 0; i < 4; i++){
//     rant("i hate beets")
// }


// you dont need to run the function 3 times to print 3 INSTEAD you set your function to already print 3 times this way you recall it only once 
// simply genuis look back to fisst example with the singBird 
// function rant(message){
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())
// }  
// rant("i hate beets")

// Exircise #2 
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!")
    }
    else if (die1 > 1 || die2 > 1)
    // or else if(die1 !== 1 || die2 !== 1)
    {
        console.log("Not Snake Eyes!")
    }
}

// isSnakeEyes(1, 1)
// isSnakeEyes(1, 2)
// isSnakeEyes(5, 6)
// isSnakeEyes(5, 1)

// Exircise #3 (got portion of it but ended up lloking at solution )
    // this first portion i get creating function and giving it argument so we can then add input to it 
function lastElement(ray) {
    // then here set if to return null when array is empty can achieve this be utilixing its legth
        // -where if the length = 0 well then we know that the array is empty and return null
    if (ray,length === 0){
        return null;
    }
    // and here use else to run this if above wasnt true and able to run 
    else {
        // so here we return like usual diffence is that we wanted inly last value in input(this case an array)     
        // - we return the argument "ray" and to get last value we set to the index of its ray.length -1
            // length will always be 1 grater then lest index
        return ray[ray.length - 1]
    }
}
// i was previusoly confused when it asked to return an array, wasent sure if a fo that in argument or function label or in the return line 
    // -ultimatly relized after viewing solutionn is that array would return only when i called the function with a array in argemetns place
        // -so had nothing to do with the funtion its self only with what values in argument when calling function Ex. lastElement([1, 2, 3])
            // -now its returns array becuse given that va;luw in the calling of array

// Exircise #4
function capitalize(memo){
    let nemo = memo[0].toUpperCase() + memo.slice(1, (memo.length))
    return nemo
}

// Exircise #5
function sumArray(ray) {
    let total = 0;
    for (let i = 0; i < ray.length; i++) {
        total = total + ray[i];
    }
    return total;
}

// Exircise #6
function returnDay(num) {
    let days = {1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday", }
      if (num < 1 || num > 7) {
          return null;
      }
      else{
          return days[num];
      }
  }
  
  // now with the array
  // function returnDay(num) {
  //   let dayz = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  //     if (num < 1 || num > 7) {
  //         return null;
  //     }
  //     else {
  //         return dayz[num]
  //     }
  // }







// NOTES:

// THOUGHTS:





