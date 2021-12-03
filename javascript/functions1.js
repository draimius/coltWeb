console.log("yoo yoo")
// FUNCTION SCOPE  - fucntion bubble
    // a varible set withina function is only accesible within the function / or only exist within that function or for that function
        // fucntion is able to aceese varibles set outside of function calling varible label
        // alsp is varible with same name in and out side the function proximity win, if bring called within function uses value in function if outside uses outside value
// BLOCK SCOPE  - block is conditional adn loops all things within {} excluding a function
    // similar to above varible only exist within that block , dosent exist to outside code 
        // can only be accessed within the block
// LEXICAL SCOPE - varibles set in functions within functions 
    // inside function have access to varible outside of itself function but withing the overarching parent functin
        // kinda like regular scope where function inside whole file has access to out side varible set but outside file cant access function gse varible
        // think lexical just like regular function scope but within the overarching peant function (inside has access to outside but not other way around)
// FUNCTION EXPRESSIONS - dif way to define a function (storing a function within a varible)
    // Ex. 
        // funciton -   fuction fucntionLable(){}
        // function expressin -   const variableName = function(){}   or    const variableName = function(){}
            //  in function label come after "function" then() then{}
            //  but in expressing it let/const VaribleName = then "function" () and {} with no lable after "function"
                // written difference it that your declaring the lable after the function vs after let or const
        // In expressin retunr is the same way of functionName()  vs variableNmae()     - (that expreses a fucntion)
// HIGHER ORDER FUNCTIONS - fucntion tha work with or operate on other functions
    // can accept other funtions as arguments and/or return a function
    // Ex.  (important to not add () to the argument within the calling function argument do like below and not test(memo()) 
            // -if you do that instead of the function runing the function it will will run parent function but on result of nested and not actual function
        // function that run its arguments
function test(run){
    run()
    run()
}
function memo(){
    console.log("hi")
}
// or same thing but fuction expretion
function xmemo(){
    console.log("hey")
}
// run with
test(memo)
test(xmemo)
    // More Ex.
function callFive(call) {
    for (let i = 0; i < 5; i++){
        call();
    }
}
callFive(memo)

// DEFINING METHODS -  creating list of method(aka functions) nested within and object whether "object, array ect.." that you can then call 
    //- method example. .toLowerCase() or .push() ect..
    // Ex.
// let myCapital = {
//     low0: function (word) {
//         return word[0].toLowerCase()
//     }, 
//     up0: function (word) {
//         return word[0].toUpperCase()
//     }
// }
// myCapital.up0("aAa")
// myCapital.low0("AaA")
    // Short Hand - work same as above simply take away the "funtion and the : inbetween aswell", written  the lable - argument then block or function actions
let myCapital = {
    low0 (word) {
        return word[0].toLowerCase()
    }, 
    up0 (word) {
        return word[0].toUpperCase()
    }
}
// THIS - typically used inside methods nested within objects( creat object with dif type of info keypairs functions methods and functionality ect..)
    // when we write "this." what its really saying is "this" hen eggCount/ so this refercese to object then keypair/label selected within that object
        // will work different when seting variable to say hen, like hen1 = hen the "this will no work the same" 
            // - becuase there nothing to its left to reference like when calling hen hen.layAnEgg() whre hen is left of LayAnEgg so refrencese that
                // - unlike example of hen1 = hen if we run simply hen1() theres nothing to reference so goes to defult of "window" somthin dif voerarching store for z data some some 
                    // want a better undersatnding of "this" and how it work and interacts
const hen = {
    name: "Helen", 
    eggCount: 0, 
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    },
    
}
// TRY AND CATCH - catching error and stopping it from breaking crashing code
    // basiclly a fail safe if something goes wrong have back up code to run and rest of code is ran vs getting error and enverything stopping there
    // use try block when potential of code crashing or failing in system
    // Ex.
    // where this code it try fails and get error
try {
    console.log(heyhey)
    // and catch is here to go ahead and keep it running in event of error it runs its
} catch {
    console.log("look like and error I got you bro")
}























// EXIRCISES:
// let square = function(num){
//     return Math.pow(num, 2);
// }
// // important to remember still creating an aboject co , between every keypair or this case method created also ; end of return code
// const square = {
//     area (side) {
//         return Math.pow(side, 2);
//     },
//     perimeter (side) {
//         return side * 4;
//     },
// }

// // utilizing this to use the keypair within the object where defined method also is and actually able to return or update its value within said method
// const hen = {
//     name: "Helen", 
//     eggCount: 0, 
//     layAnEgg() {
//         this.eggCount++;
//         return "EGG";
//     },
    
// }

// MOTE - var vs. let/const : let/const have mutiple scope while var is only scoped in functions var has no scope with blocks
    // can use function as argument, return functions ect. and more when fucntion expressions