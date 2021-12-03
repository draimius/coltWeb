// TRUTHY AND FALSY VALUES : 
    // all values defult to truthy(degree of true) 
    // ALL Execept [false, 0, ""/empty stringt, null, undefined, Nan] 
        // note space " " is truathy but simply "" with nothing is empty string

    // Ex.  testing if there is any user input(revealing its inherit boolean value)

// let user = prompt("user input")
// if(user){
//     console.log("any user input")
// }
// else{
//     console.log("falsy")
// }

    // Ex. = falsy(same goes for Nan and undefined just lkie stated execeptions above)

// if(0){
//     console.log("any user input")
// }
// else{
//     console.log("falsy")
// }

// LOGICAL OPERATOR: allows us to combines dif expresion/logic
// --- 3 core logical operators

    // AND " && " : allows you to combine expression left && right
        // Both Espression Must be TRUE for Whole thing to be TRUE (false && false = false [dosent count must be result TRUE])
            // Ex. 1 <= 4 && "a" === "a" = true
            // Ex. 9 > 10 && 9 >= 9 = false
        // like multi if's only if 1st parameter is true will nested code run and test further 
            // -- if 1st parameter is not met/true rest of nested code will not run
// let pass = prompt("password plz")
// if(pass.length > 5 && pass.indexOf(" ") === -1){
//     console.log("valid password")
// }
// else{
//     console.log("invalid password")
// }

// 1st character must be "P"
// and length must be 5 characters so 6+
// and should not contain character of "7")
    // --if it dosent exist gives me -1 )[positioning dosent matter]
    // --- -1 in parameter give us false (-1 doesnot = -1 thats false /
    // --- now if a 7 exist it will give value providing its position in string
    // --- now as long as it exist it makes parameter true (Ex. 2,7,12, dosent = -1 : thats TRUE)




    // OR " || " : allow you to run multi expression checking for either one to be true
        // only one expression need to be to true for 
        // Ex. true || true = true
        // Ex. true || false = true
        // Ex. false || true = true
        // Ex. false || false = true
    
// 0-5 - free
// 5-10 childo $10
// 10 -65 adult $20
// 65+ senior $15
        // in this example Importnat note && runs first then ||
// age = prompt("what is your age?")
// if(age > 0 && age < 5){console.log("Free")}
// else if(age > 5 && age < 10 || age < 100 && age > 65){console.log("discount $10")}
// else if(age > 10 && age < 65){console.log("adult $20")}
// else{console.log("invalid age")}


    // AND NOT " ! " : flips boolean value per say
        // Will return True Only if the expression logic is False
            // Ex. false = false
            // Ex. !false = true
            // Ex. (1 === 1) = true but add "!"  !(1 === 1) = false
            // Ex. null = false but  !null = true

let firstName = prompt("enter your first name")
    // insted of : 
// if(firstName === ""){console.log("try again")}
    // cna use "!" to achieve same thing ("if ther is no first name do this")
if(!firstName){console.log("try again")}



