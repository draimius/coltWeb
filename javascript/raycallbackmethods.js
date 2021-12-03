// ARRAY CALL BACK METHODS - below subseto array methods built in
// FOREACH - runs fucntion slected for ecah item in the array| written .forEach()
    // (not used very often now with introduction of for of loop but importan to know as often see in work)
    // funciton selection done in () of the method whether pre defined fucniton or can be created there for that specified call back
        // Ex.  WRITTEn - arrayName.forEach(functionSelected)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// numbers.forEach(function(num) {
//     console.log(num);
// })
// now with predefend  function that does same thing(use predined when you'll be calling it back more than once)
    // difine function 
let print = function(num) {
    console.log(num)
}
    // then run it in the forEach
numbers.forEach(print)
// Note - funciton whether predefined or created for that one use work as all others can add parameter loops else breaks ect...
        // FOR Of example of above   [dose exact same thing as anbove jsut simpler andeasier ti read and write]
// for (num of numbers) {
//     console.log(num)
// }

// MAP - creats a new arrray form the callback of original arrray selected
    // (does not alter the original arrray and the new can be set to varible to access later)   
    // NOTE - for this and froEach can pass fucntions within thier ()
    // Ex.
// this one just like forecah above strats with arrayName then method and also function created in thier ()
// ray.map(function(tray) {
//     return tray.trim();
// })
// this example very similar but is a higher order function 
    // have function then our .map() with then another funtion in that to achieve desired return
function cleanNames(ray) {
    let nray = ray.map(function(tray) {
        return tray.trim();
    })
    return nray;
}
// SETTIMEOUT and SETINTERVAL AND CLEARINTERVEL- 
// setTimeout - expectes callback and # of milisecond for delay
    // delays code selected
    // Ex.
// code is delayed by 3 second then logs after those 3 secs
// only what is within the setTimeout block is delayed
// note - milisecon value goes between the }  comma, then ending ) 
setTimeout(function(){
    console.log("hello")
}, 3000)
// or 
// seem like the => basicly take place of "function" though it place after the () and not befomre like the word
setTimeout(() =>{
    console.log("hello")
}, 3000)


// setInterval - code will repeat at every interval selected ex. code runs every 2 seconds ect..
// Ex.
// setInterval(() => {
//     console.log("hi")
// }, 5000)
// clearInterval - it stops or clears the interval from continuing to run
    // best way to do is set the "setInterval to varible" that way we can locate it
    // Ex.
let stopy = setInterval(() => {
    console.log("hi")
}, 000)
// and stop using 
clearInterval(stopy)
// note can combine these like run interval while have a clear inverval within a settime out to clear intervale after x# of sec ectt.



// FILTER - 
    // written .filter()
                    // funciton has access to element index and original array
// let newArray = arrayWeWantToFilter.filter(function(element, index, array))
    // NOTE - with method seem require a function within to carryout action other with method dosent do much 
function validUserNames(ray) {
    let nray = ray.filter(function(fray) {
        return fray.length < 10;
    })
    return nray;
}








// SOME & EVERY - test if values meet parameters (typically for arrays and objects)
// Every - every value in array must pass parameter otherwise will return false/ only when all meet will it return true
// Some - if some value (at least one)  meets parameters will retunr true
function allEvens(num) {
    return num.every(num => num % 2 === 0)
}




// REDUCE - take array and reduce down to single value(we cose how it will do that)
    // requires reducer funtion written -  reduce.(accumulator, currentValue) => return accumulatoer + current value;
    //  reduce.(thingWereSumingDown, currentValue) => return accumulatoer + current value;
        // returned will be used as new accumilater on next go around to sum arrray(kinda like accumilator things suming is updated with eac return)
    // used for addition aswell as coparasons
// Addition - 
let dig = [1, 2, 3, 4, 5, 6, 7]
// let rayTotal = dig.reduce(function(total, num) {
//     return total + num
// })
    // written with arrows and no retunr or {}
let rayTotal = dig.reduce((total, num) => (
        total + num
))
// Comparison  - 
let greaterDig = dig.reduce(function(high, current) {
    if (current > high) {
        return current;
    }
    return high;
})
// start value set - strat vaulue goes outside {} and inside ) with comma , infromt of value declared
// let totalPlus = dig.reduce((sum, num) => sum + num, 100)
let totalPlus = dig.reduce(function(sum, num) {
    return sum + num
}, 100)



// Arrow Functions - newwer syntax compact to regular function expression (used in array methods) [dont use to define methods]
    // used to creat function expressions
    // useful when have funciton for sole purpose to be pased into another function(only an argument never to be reused one time thing)
    // Ex.
// we set are varible name then = (parameter) if any if nothing leave empty () the => {} then action or desire retunr within the {}
// let greet = (single) => {
//     return (`Hey ${single}!`)
// }
// Implicite Returns    
// NOTE - only work if there is ONLY ONE statment or ONE VALUE within function
// even mmore compact in specific situations /where we can leave of retunr key word 
    // -return is no present and instead of {} use regular () to house function actions
let greet = (single) => (
    (`Hey ${single}!`)
)
// can even get rid of () houseing function action and parameter as well is short enough to be one liner code
// note - parameter () can only be absent when ther is only one parameter
// Ex.
const isEven = num => num % 2 === 0;
// More Ex.
// const newMovies = mvoie.map(function(movie) {
//     return `${movie.title} - $movie.score / 10}`
// })
// // turns to this (really just 1st line but give you really good ideal as to how it works)
// const newMovies = movies.map(movie => (
//     return `${movie.title} - ${movie.score / 10}`
// ))
// Arrow Functions AND "This"
    // => with this will refer to scope created in only aka window or the defult aka will not work as regular function
        // different as to how it is executed in arrow function, nolt declared
// dont completly understand this buti will
    // Ex.
let person = {
    firstName: `draimius`, 
    lastName: `ramirez`, 
    fullName: function() {
        return `${this,this.firstName} ${this,this.lastName}`
    }, 
    // shoutName: function() {
    //     setTimeout(function() {
    //         console.log(this);
    //         console.log(this.fullName());
    //     }, 2000)
    // }
    // this one behaves differnt from one above: 
        // whats the difference something with the scope
    shoutName: function() {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName());
        }, 2000)
    }
}


















// EXERCISES:
    // .map()
function cleanNames(ray) {
    let tnew = ray.map(function(ray1) {
        return ray1.trim();
    })
    return tnew;
}

    // filter()
function validUserNames(ray) {
    let nray = ray.filter(function(fray) {
        return fray.length < 10;
    })
    return nray;
}

    // every and some
function allEvens(num) {
    return num.every(num => num % 2 === 0)
}

// NOTE: 