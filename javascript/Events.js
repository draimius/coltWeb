// // DOM EVENTS - clicking drag drop hovers scrolls pop up ect..


// // EVENT - 3 way sto respond to user interaction
// // 1. write inline withing html file (not prefered unnecesery duplication) will show in DOM
//     // Ex. <button onclick="alert(`you clicked me`)">click me</button>


// // 2. wrinting in seperate javascript file can apply events to multiple element but not multiple events
// let btn = document.querySelector(`#v2`)
// // btn retunrs : <button id="v2">click me num.2</button>
// console.dir(btn)  // - give us all inner object values list
// // setting button event to function action(via direct function or pre defined)
// btn.onclick = function() {
//     console.log(`you clicked me`)
//     console.log(`hows it going`)
// }
//     // Ex. predefined
// function greet() {
//     console.log(`hello`)
//     // alert(`hello`)
// }
// // key not function is not bing caleld or run its simply bieng asigned to the EVENT
// btn.onmouseenter = greet;
// // msut be refrencet to function (wraoed in functin) vs simply set to alert nono that will auto run
// document.querySelector(`h1 `).onclick = function () {
//     alert(`you clicked H1 baby!`)
// }
// // NOTE - can not have two dif values for same event click with this method

// // 3. special method : addEventListener(swis army knife of event) (can sleect multiple elemet but multiple evnts and actions)
//     // written in javascript : we select element the select even then fucntion 
// let btn3 = document.querySelector(`#v3`)
// // var.addenventListner (type of Event, function() {action wanted when event})
// btn3.addEventListener(`click`, function() {
//     alert(`clickeedddd`)
// })

// // NOTE - will allow to apply multiple value for same event slected 
//     // - also have additional option as to how event will work provides more flexibility
// start HERE AND ALL WAY UP ___________________________________________________
// EVENT LISNER ARGUMENT(or object)

// ADD EVENT LISTNER




// =============================================================
// FORM EVENTS - 
// Ex.
const form = document.querySelector(`form`);
form.addEventListener(`submit`, function (e) {
    // alert(`submi`);
    console.log(e)
    // prevent defult tied to the funciton (argument) and prevent defult behavior 
    // - in this case having the submition jump us to the next page
    e.preventDefault();
    const username = document.querySelector(`input[name="username"]`).value;
    // note can also target with (`input`)[0] - using index same result
    const comment = document.querySelector(`input[name="comment"]`).value;
    // .value will give us the value submitted to form
    console.log(username);
    console.log(comment);
    // creating elements to be appended - (where colts code would go- moving to seperate function)
    // impotant that here aswell as function we refrence the vars -username and comment
    addComment(username, comment);
    // now clear inputs after submitted (setting the input values back to empty string)
    document.querySelector(`input[name="username"]`).value = ``;
    document.querySelector(`input[name="comment"]`).value = ``;

    // my self created code
    //     const liusername = document.createElement(`li`);
    //     const licomment = document.createElement(`li`);
    //     // now i change thier inner text (note not using li value as that represent the whole li)[we just want the value]
    //     liusername.innerText = username;
    //     licomment.innerText = comment;

    //     // and now we append to the page
    //     document.querySelector(`ul`).appendChild(liusername);
    // document.querySelector(`ul`).appendChild(licomment)

})
// NOTE - form has propretie called "elements" allows us to target specified input by its name (good when have several inputs[simpler])
// can also iterate over form "elements"
// Ex. -  form.elements.username = document.querySelector(`input[name="username"]`)  [first jsut nicer and shorter
// note on above form not targeted with "form" i simply jsut name var that
// colts code - more nesting of element but very similar what i did above ==============
// created only 1 li to hold both the username and commment
// also gonna putt this part into separeate function itself
function addComment(username, comment) {
    const newComment = document.createElement(`li`);
    const bTag = document.createElement(`b`);
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(`- ${comment}`);
    document.querySelector(`ul`).append(newComment)
}


// =============================================================
// KEYBOARD EVENTS  - 
// we rely on the event object to know what key was pressed aka the retunr of addevent function ("argument")
document.querySelector(`h1`).addEventListener(`click`, function (e) {
    console.log(e)
})
// returns - MouseEvent {isTrusted: true, screenX: -1579, screenY: 206, clientX: 100, clientY: 94, …
// -object full of propeties(event typoe x,y cords where clicked ect.. )
// - can have view of specified element or sectin or the whole window itself
const input = document.querySelector(`input`);
// can listen on whole page using widow, cool
window.addEventListener(`keydown`, function (e) {
    // console.log(e.key)
    // console.log(e.code)
})
// - key = end result (when dont care what key was usedto genereate only care for end result ) 
// - code = actual location on board(use when want to use specified location on keyboard)
// input.addEventListener(`keyup`, function() {
//     console.log(`keyup`)
// })
// NOTE - key up and down will trigger for any press even arow ke ect.. whent no value is eneter in inputs ect..
// NOTE - not about adding character to the input but the simple act of key bieng pressed
// =============================================================




// =============================================================
// INPUT & CHANGE EVENTS 
const change = document.querySelector(`#change`);
const h3 = document.querySelector(`h3`);
// will run function when change is inputted into siad input aka clikc on chagen the chilck off
// input.addEventListener(`change`,function (e) {})
// will fire function action when the input detects any change at all (not only when click off or type[can paste ect..])
// below crat live insync between h3 and input text applied, coll
change.addEventListener(`input`, function (e) {
    document.querySelector(`h3`).innerText = change.value;
})




// =============================================================
// EVENT BUBBLING 
// when event triggered for nested element it also trigger the parents event listener if the same
// how can we prevent evnet bubbling
// USE :   .stopPropagation    similar to the pverntDefault 



// =============================================================
// EVENT DELGATION - strategicly working with events triggiers
// adding the event listener to a parent of nested element vs to the neted elemsnt itself
// in this way you always have the container or stable element to work with slelct
// slecet the will then effect the nested element wanted
// you di this by utilizing the :   .target   poperty[target elemet within parent]
// Ex.
// using ul as eventlistener with target of li and to unsure working inly with that 
// we check the nodeNmae, then if checksout we remove it remove for examples no real reason)
// tweetContaier.addEventListener(`click`, funtion (e) {
//     e.target.nodeName === `LI` && e.target.remove();
// })
//ther could be a paragaph or dif element within that ul but becuse we specified the nodeName 
// - we want it will only remove li of diff selectednothing happends





// MINI PROJECT CODE
// let bon = document.querySelector(`#bon`)
// let h = document.querySelector(`#h`)
// bon.addEventListener(`click`, function() {
//     const newColor = mrColor();
//     document.body.style.backgroundColor = newColor;
//     h.innerText = newColor;
// })
// // if functionality can stand alone 
const mrColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
// PROJECT 2 --
// const btns = document.querySelectorAll(`button`)
// for (let button of btns) {
//     button.addEventListener(`click`, function() {
//         // mrColor is not a variable its A Function that must be called with () at end
//         button.style.backgroundColor = mrColor();
//         button.style.color = mrColor();
//     })
// }
// const hh = document.querySelectorAll(`h1`)
// for (let hs of hh) {
//     hs.addEventListener(`click`, function() {
//         hs.style.backgroundColor = mrColor();
//         hs.style.color = mrColor();
//     })
// }
// utilizing "THIS with Events"
// "THIS" will refer to whatever element is bing acted upon (can elimanete redundencies)
// can re-wite above utilizing "THIS"
function colorize() {
    this.style.backgroundColor = mrColor();
    this.style.color = mrColor();
}
const btns = document.querySelectorAll(`button`)
for (let button of btns) {
    button.addEventListener(`click`, colorize)
}
const hh = document.querySelectorAll(`h1`)
for (let hs of hh) {
    hs.addEventListener(`click`, colorize)
}
// NOTE didnt have to reference the specified element simply used this and that refered to element bieng acted on
    // -regarless of what it is. use to reference whatever element within the the loop/event












// EXCERSICES
// let hello = document.querySelector(`#hello`)
// let bye = document.querySelector(`#goodbye`)
// hello.addEventListener(`click`, function () {
//     console.log(`hello`)
// })
// bye.addEventListener(`click`, function () {
//     console.log(`goodbye`)
// })

    // form events
// const form = document.querySelector(`form`);
// const list = document.querySelector(`#list`);
// form.addEventListener(`submit`, function (e) {
//     e.preventDefault();
//     const product = document.querySelector(`#product`);
//     const qty = document.querySelector(`#qty`);
//     const item = document.createElement(`li`);
//     item.innerText = `${qty.value} ${product.value}`;
//     list.appendChild(item);
//     product.value = ``;
//     qty.value = ``;

// })

    // input event 
// const input = document.querySelector(`input`);
// const h1 = document.querySelector(`h1`);
// input.addEventListener(`input`, function (e) {
//     h1.innerText = `Welcome, ${input.value}`
//     if (input.value === ``) {
//         h1.innerText = `Enter Your Username`
//     }
// })





























