// DEFAULT PARAMS - sets a startin value/parameter or defult to that function (if muiltiple parameter pass defuts as 2nd or last)
    // Ex. set stating value of b to 1  
function multiply(a, b = 1) {
    return a * b;
}
//  Ex. the numSides = 6 is set as the defult parameter or staring value
function rollDice(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}
    // if no start value set and we call funciton with no value in pararmeters will return Nan - rollDice() = NaN
        // now with starting value of 6 if no value in () function will return # from 1 to 6
// Important pay atention to order of parameters when have multiple / defult come last





// ---------------------------------------------------------------------------------------------------------------------
// SPREAD IN FUNCTION CALLS - written ...arrayName allows vlues in array to alll be passed as separate argument[take [] and , awya]
    // can be done with anything that is iterable 
        // Ex. notice differnce in output
console.log("hello")
console.log(..."hello")
console.log(...[1, 1, 2, 3, 23, 41])
console.log([1, 1, 2, 3, 23, 41])


// SPREAD WITH ARRAY - allows us to combine array make copie of array without altering original (interesting for nedted arrays)
   // Ex.
let cats = ["Mr.Miles", "Mars" ]
let dogs = ["Bubles", "choco", "fluffy", "ace" ]
// very easy to conbine arrays and creat new copy of it (order will effect out put)
let allPets = [...cats, ...dogs]
// can also add in as pleased
// let allPets = [33, ...cats, ...dogs, "ROCKET"]


// SPREAD WITH OBJECTS literals - used to creat copies of objects
    // works pretty much as it does with arrays in regards to combining and order
    // used when you want to add your key values to an object say for use all info / but you add key value pair of Admin: false ect.. thing like that
// Note - whe cmobining to object if they have cong]flicting informatin aka both have the same key but different value for them
    // - the last one in order will win out





    // ---------------------------------------------------------------------------------------------------------------------
// REST PARAMS - (argumnets object, is array like but not an array and dont have acces to methods)
    // Rest operator -  ...parameterSelected | passed to the REST of values in parameter
// ex. in this value of nums = 12 aka the first value written in the function call back and will not change
// function sum(nums) {
//     console.log(nums)
// }
    // Vs. this example its applied to the 1st aswell as the REST 
    //  - and results in and array  :   [12, 32, 2, 4]
function sum(...nums) {
    console.log(nums)
}
// collect The REST of values
// say we wnated to add up alllnumbers in array writen in arguments space we would use the ... operator
    


    // Ex. inthis only "argument" represent all values inputed in call back and no way to seperate or specify
// function sum() {
//     console.log(arguments)
// }
sum(12, 32, 2, 4)
// return sum with those values above in order in an array
    // Ex. vs here the first is specified (gold) then all other grouped together under all else
function raceResults(gold, ...allElse) {
    console.log(`gold goes to: ${gold}`)
    console.log(`special thanks to: ${allElse}`)
}
raceResults("James", "cathy ", "brenda ", "mat")





// ---------------------------------------------------------------------------------------------------------------------
// DESTRUCTURING -  allows is to upack or single out value from an array sor object and put the into specified varibles
    // Oreder matters all based upon position
//  Destructoring Array - msut be in order
    //  Ex.
let marks = [99, 75, 34, 21, 12, 22, 11]
// ex. way we can achieve thi sbut better way to do 
// let highScore = mark[0];
// let secondScore = mark[1];
// were setting the values in array to varible where they exist
    // -like were setting label name to array values in order
let [first, second, bronze, ...everyoneElse] = marks;
console.log(first)
console.log(second)
console.log(everyoneElse)



// Destructoring Object - v\ary similar to array decunstruction with just few differences
    // Order dosent matter when working with object its done by name the "key/lable"
    // Ex.
let user = {
    email: "draimius15@gmail",
    password: "joemama1", 
    name1: "jose", 
    name2: "ramirez",
    born: 1996, 
}
// can achieve like this but lengthy better way
// let name1 = user.name1;
// let name2 = user.name2;
    // we sat to variable like below | we do this so we can access it outside of the object aswell
let {email} = user;
console.log(email) //just a log nothing here
    // RENAME
    // we can also give to value we pull a new variable name or lable dosent have ot be same as "key withing the object" 
        // use "key from object" : newVaribleName
        // here grabbed born value and gave it variable name of birthyear(vs keeping it as born aka the "key from object")
let {born: birthyear} = user;
console.log(birthyear) //just a log nothing here
    // DEFULT VALUE
// say ohter users my have for exanple a key of die: year passed [well becuase user has not that dosent exist for his object of data] 
    // where right now if i call back died "key" = undefined , as there is no coresponding key in object or any value 
    // - we can set a defult value 
// Ex. we rename and give defult value on "N/A"
let {died: deathyear = "N/A"} = user;
console.log(deathyear)


// Deconstructing Parameter - instead of targeting object and key by: objectName.keyLable
    //  - we can simply do ({keyLabel})  :  ({}) curly brases inside let know looking for object and with this keyLabel 
// Ex. 
// objectName.filter(function(objectName) {
//     return objectName.keyLabel < 90//or some condtion
// })
// objectName.filter(function({keyLabel}) {
//     return keyLabel < 90//or some condition
// })
    // note good for when targeting one key from object and not goona use the others
        // - but can target multiple if wanted with
// objectName.filter(function({keyLabel, keyLabel2, keyLabel3}) {
//     return keyLabel < 90//or some condition
// })
