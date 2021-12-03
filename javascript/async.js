// ASYNC ========





// THE CALL STACK * ========
// the apedix (basic data structure :last in last out)
// [mechanism javascript uses to keep trac of where it is i abuch of function calls]
// ex 
// const multiply = (x, y) => x * y;
const multiply = function (x, y) {
    return x * y;
}
const square = function (x) {
    return multiply(x, x);
}
const isRightTriangle = function (a, b, c) {
    return square(a) + square(b) === square(c);
}
// isRightTriangle(3, 4, 5) returns true
// call stack 
//isRightTriangle -calls square(waiting for value)
//square -calls multiply(waiting for value)
//multiply returns value and is removed from call stack
//square uses multiply value and return its value and now removed from call stack 
//isRightTriangle takes value return and continue down the line to execute
// NOTE - in above example calls stack will run trought above fow 3 time as calls `square` x3 that then calls multiply x3
// -everytime isRightTriangle is evaluating and calling nessesary function get its value then continue to get next value
// after all calls done and isRightTriangle has all values now it runs itself and returns Results ect..
// its like order of operations but with functions ect..



// UNDERSTANDING WEB API'S ========
// and single threaded (one track mind, can switch back and forth very fast but can only run one lineof code at a time)
// there are ways around this, ex. setTimeout can mke requset for data then pritn later while that later can stilrun other line of code
// the javascript hands off task to the brower itself (remind me to finish tis in 3sec ect..setTimeout ex.) 
// timout passes of to brower while javascript continue to run thenbrower remind it to execute some code and does and moves forward
// Ex.
// console.log(`sending request to data base`)
// setTimeout(function () {
//     console.log(`here data you requested`)
// }, 3000)
// console.log(`at end of file`)

// CALLBACK HELL * ========
// setTimeout(function () {
//     document.body.style.backgroundColor = `red`;
//     setTimeout(function () {
//         document.body.style.backgroundColor = `orange`;
//         setTimeout(function () {
//             document.body.style.backgroundColor = `green`;
//             setTimeout(function () {
//                 document.body.style.backgroundColor = `yellow`;
//                 setTimeout(function () {
//                     document.body.style.backgroundColor = `blue`
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// function delayColor(newColor, delay, doNext) {
//     setTimeout(function () {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }
// delayColor(`red`, 1000, function () {
//     delayColor(`orange`, 1000, function () {
//         delayColor(`green`, 1000, function () {
//             delayColor(`blue`, 1000, function () {
//                 delayColor(`violet`, 1000,)
//             })
//         })
//     })
// })
// almost  same a above but using call back (im not sure benefit doning this way vs
// the way we did it above we can shorten by seeting backgrounfcolor to var
// and seemsregardless you have to add the color and time soo yeah...)
// NOTE use when need something to happend only after the first thing has been executed 
// (only if done does it continue to the next and so forth)
// searchMovieAPI(`amadeus`, function() {
//     saveToMyDB(movies, function () {
//         //if it works, run this:
//     }, function() {
//         //if not, run this
//     })
//     //if API is dow , or request fails
// })
// NOTE: in even that one passes and other fails (nee to anticipate 2 posoble outcomes)
// -we need something to be executed in the even that it work aswell a when it doesnot
// often have multiple call backs within eachother very commen
// very nested very deep and confusing refered to as `CALLBACK HELL` - this is a problem 
// but cant realy get around it (or can you?)
// NEWWER ADDITIONS TO LANGUAGE TO TAKE CARE OF THIS**
// ex. 
// function fakeRequestCallBack(url, success, failure) {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(function () {
//         if (delay > 4000) {
//             failure(`failure timeout`)
//         }
//         else {
//             success(`success data retrived`)
//         }
//     }, delay)
// }
//IN SHORT YOU DONT WANNA DO THIS THERES BETTER WAYS TO ACHIEVE SAME RESULT



// WORKING WITH PROMISES *** ========
// this is new and requires bit od syntex
// promise represents the eventual value
//Ex. differs from ablve example were fucntion required several callbacks ie. success and faliure this one one exp[ects one `url]
// instead of passing callbacks to the finction they're passed to the promise(syntax/object/..)
// then the promise whether meet or not will run approprite defined code dependent on result
function fakeRequestPromise(url) {
    return new Promise(function (resolved, reject) {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(function () {
            if (delay > 4000) {
                reject(`failure timeout`)
            } else {
                resolved(`succes retriverd fake data for ${url}`)
            }
        }, delay)
    })
}
// fakeRequestPromise(`joemama.com`)
//     .then(function () { //then is ran when it works 
//         console.log(`it worked pg.1`)
//         fakeRequestPromise(`joemama2.com`)
//             .then(function () { //then is ran when it works 
//                 console.log(`it worked pg.2`)
//             })
//             .catch(function () { //catch when then v2 dont work
//                 console.log(`on no, error pg2`)
//             })
//     })
//     .catch(function () { //catch when then dont work
//         console.log(`oh no, errorrr!!`)
//     })
// //both examples above not much different from the call back hell we had still pretty much saemthing just written different
//NOTE these dont require the {} after () speciificly when runnin gor doing the call back as function has already been defined          
// also nothing directly connecting the call back and the then and catch connected seem by the `.` period .(catch or then)
//Ex. this makes it so it looks nicer silplier more readable and we daont use multiple catches jsut one
//everything is `chianed together with the "." aka period
fakeRequestPromise(`fakewebsote.com`)
    .then(function () {//run this if 1st promise is resolved return the next
        console.log(`data pg.1`)
        return fakeRequestPromise(`fakewebsite2.com`)
    })
    .then(function () {//then run this if above promise is resolved the return next ansd so forth
        console.log(`data pg.2`)
        return fakeRequestPromise(`fakewebsite3.com`)
    })
    .then(function () {//any moment the above promise is not resolved then the catch will run
        console.log(`data pg.3`)
    })
    .catch(function () {
        console.log(`ERRRORRR`)
    })
//NOTE everything is connected by the . = period | also utilizes the return to call the next callback ect.. 
// and one one catch for all the then where if one dont work is catght by that regardless of which




// CREATING OUR OWN PROMISES ========
// Ex. tipically written parameters are resolve and reject | seems 1st parameter mean succesful and 2nd will always be the rejection or fail parameter
// new Promise (function (resolve, reject) {
//     resolve();
// })
//Ex. v2 - will most often than not have a resolve and rejected parameters
const fakeRequest = function (url) {
    return new Promise(function (resolve, reject) {//1st will resolve the promise 2nd will reject the promise
        const rand = Math.random();
        setTimeout(function () {
            if (rand < 0.7) {
                resolve(`your fake data here`);
            }
            reject(`requst ERRRORRR!`);
        }, 1000)
    })
}
//Ex. v3 - 
fakeRequest(`/dogs/1`)
    .then(function (data) {
        console.log(`done with request!`)
        console.log(`data is:`, data)
    })
    .catch(function (err) {
        console.log(`oh no`, err)
    })
//Ex. v4 -  color promise above but written effectivly with promises
const colorDelay = function (color, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
//ex. v5
//NOTE - similar in syntex but now we aviod having topass in multiple .then and .catchs also avoid nesting(big deal)
// colorDelay(`red`, 1000)
//     .then(function () {//much simpler than previousl example for sme result  we jsut do then then the ect...
//         return colorDelay(`orange`, 1000)
//     })
//     .then(function () {
//         return colorDelay(`yellow`, 1000)
//     })
//     .then(() => colorDelay(`green`, 1000))//did arrow and implicite returns jsut to ahve dif way to show it same results
//     .then(() => colorDelay(`blue`, 1000))
//     .then(() => colorDelay(`indigo`, 1000))

//NOTE much easier to read vss previous example{}       
// - in this example there was no need for a catch as dont plan fo rthe fail right (
// but if needed we would just add one catch at the end of thens to cover all above thens in event not resolved)



// ASYNC FUNCTIONS *** ======== (await??)
// newer feture in javascript : clean async code : build all on Promises just prettiers lol (syntex not avalible on all browses) [there is oldl way of doin gthios asweel, learn that]
// keyword reused to declare a funciton as a `ASYNC` function 
// if function sdeclared as async that function will always `AUTO` RETURN A  PROMISE
// Ex. 
// async function hello() {

// }
// // hello() = returns a promise
// //Ex. v2
// const sing = async function() {
//     throw `ahhhhhhmh`; //is there is an error (some goes wrong) or we throw an erro that auto promise will be Rejected within the async
//     return `la la la la`;
// }
// sing().then(function(data) {
//     console.log(`promise resolve with:`, data)
// })
// .catch(function (err) {//adding the catch even now explicitly defined promise but just based on the pronise that will be created by the async funciton itself
//     console.log(`oh no, promise rejected`)
//     console.log(err)
// })
// no need to write in "return new Promise" ect.. simply declaring as async will return a promise
//NOTE just like functions can also be written like object aka const sing = async funciton() {} ect...  aka set to varible name
//Ex. v4
const login = async function (username, password) {
    if (!username || !password) throw `missing credentials`
    if (password === `bluecheese`) return `welcome cheese goer`
    throw `invalid password`
}
//NOTE how we make the funciton containing the parameters then actually write the actions of said parameter itself
login(`asdflkhj`, `password here`)
    .then(function (msg) {
        console.log(`logged in`)
        console.log(msg)
    })
    .catch(function (err) {
        console.log(`ERRORR!`)
        console.log(err)
    })
    // if value return promise fulliled if throw erre its cautght
// AWAIT (asycn) combined with async 
    //await will pause the execution of the function , until prmise is resolved the it will continue to execute
//Ex. 
async function rainbow() {
    await colorDelay(`red`, 1000)   //each one return a promise and await for result then moves down line to do for each
    await colorDelay(`orange`, 1000)//muchsipler and cleaner
    await colorDelay(`yellow`, 1000)
    await colorDelay(`green`, 1000)
    await colorDelay(`blue`, 1000)
    await colorDelay(`indigo`, 1000)
    console.log(`hi im done`)
}
rainbow()//calling above
//NOTE awiats are most often used with async functions as async creates promise and waits will creat that sequence pause
    //- example above promises are not rqueiring value to be resolve right now just using to pause fucntion executions
// async function makeTwoRequsts() {
//     let data1 = await fakeRequest(`/page1`);
//     console.log(data1)
// }
//NOTE these examples above are workng on predefined functions aswell like the colorchange function now jst adding async and waits to it 
    //- also the reuest function already defined simply  now adding asyncs and awaits to it (to bahave how we want it to)

//HANDLING ERROR (ASYNC FUNCTIONS)
    //utilize try and catch sytax
//Ex. 
async function makeTwoRequsts() {
    try {
        let data1 = await fakeRequest(`/page1`);
        console.log(data1)
        let data2 = await fakeRequest(`/page2`);
        console.log(data2)
        let data3 = await fakeRequest(`/page3`);
        console.log(data3)
    } catch (e) {
        console.log(`------catch the errorrr------`)
        console.log(e)
    }
}
makeTwoRequsts()