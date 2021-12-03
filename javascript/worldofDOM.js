console.log("world of dom".toUpperCase())
// UNDERSTANDING THE DOM -  DOcumnet Object Model (basicly bunch of object that actually creat our web page) [JS contributes the actions/interactions]
// its our window into the webpage via javascipt
//  every element in html ex. <h1>, <ul> ect.. are an object themsleves aswell containing several key pairs [all connected in tree ]
// console.dir aka directory slector
//  so all objects therefore i can target and manipulate with JS
// selecting and changed value of that and change reflected on web page
// document.all[11].innerText = "SLICKYIE"
// "SLICKYIE"

// ----------------------------------------------------------------------------
// GET ELEMENT BYID - slecting via id, class, and element aka syntax
// do same way as written in css 
// Selecting - 
// By ID ========
// Ex. fetch me object that represent this in document [by id]
document.getElementById("banner")
console.dir(banner)

// By Tag Name ========
// Get elements by tag name - can select multipla at one time (jsut like css all that have tag will be selected/effected)
// Ex. slects all images
document.getElementsByTagName("img")
// then select individual by index
// or can do by setting above to a variable then index of that ect..
document.getElementsByTagName("img")[1]
const allimages = document.getElementsByTagName("img")
console.dir(allimages[1])
// Ex. prints all image scources
// for (let images of allimages) {
//     console.log(images.src)
// }
// manipulate all img src turn then all to that one src selected and is directly applyed to web page via JS
// for (let images of allimages) {
//     images.src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png"
// }
// By Class ========
// Get elements by class - can select multipla at one time
// Ex. this chages img source for al elements with ClassName of "sqares" (we did save that to new varible but can be done without it aswell)
const squares = document.getElementsByClassName("square")
// for (let square of squares) {
//     square.src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png"
// }

// NOTE - by tag and class written ElementS not elemenT like id
// - if nothing exist with tagname or classname selected will return empty object
// - however for id if dosent exist returns null

// ----------------------------------------------------------------------------
// QUERY SELECTOR - instead of above with seperat selector its all in one (use to grab one at time)
// same method to select then jsut identify as we would in css #id .class h1 
// -this includes things like p:nth-of-type(2) ect to select wanted elment
// Ex. this case sleected with element syntax 
// - only first p is selected only first apperance vs. by elementstagName would select all tih that tag "p"
// by element
document.querySelector("p")
document.querySelector("p:nth-of-type(2)")
// Ex.selected element <a> with attribute of title = "java"
document.querySelector(`a[title="Java"]`)
// QUERY SELECTOR ALL -  will return collection of all matching elelments(use to grab multiple)
// pulls both <p> elements and not just the first
document.querySelectorAll("p")
// above shows lot of only 


// NOTE - selection works pretty much like css can slect by class id element nth of type 
// - by decended selector like p, a "a tags in paragraph" ect...
// Selection works just like css selecting
// We locate via document. and print with console.dir()

// ----------------------------------------------------------------------------
// MANIPULATION =========
// INNER HTML AND TEXT - 
// Inner Hmtl -give us all markup within an element(shows all syntax)(only one that can add elements)
// shows as if we are looking at the html file itselft with and syntax ect..
// - useful for updating its contents nad change the inner html
// Ex. selecting the inner html mark up
document.querySelector(`p`).innerHTML
// changed the slected h1 text and element to "hey hey" - in actual italics
document.querySelector(`h1`).innerHTML = `<i> hey hey </i>`
// can also instead of completly replace can add to it 
// Ex. - ading to the exsinting he hey in italic now also has sup bro in - superscript
// do to + add then = have it equal this (Updating Value)
document.querySelector(`h1`).innerHTML += `<sup> sup bro</sup>`

// Inner Text - pulls all text seen as user between opening and closing of paragraph tag (shows only what user can see)
// can retrieve it and chnge(set to new value) : just like anyother javascript object
// Ex. - selected all innner text
document.querySelector(`p`).innerText
// replaced all content within <p> with `joe mama`
// -replacese all text element within tha paragraph
// document.querySelector(`p`).innerText = `joe mama`
// grabbed all <a> tag and changed thier text (inner) to the "im link baby"
// this would completly override anything we had within like bold italic a span ect..
const allLinks = document.querySelectorAll(`a`)
for (let link of allLinks) {
    link.innerText = (`am a link baby`)
}
// Ex. - attemtped to add an element to h1 
// document.querySelector(`h1`).innerText = `<i> hey hey </i>`
// becuse only innerText h1 turn to exactly "<i> hey hey </i>" in text instead of applying as html code



// Text Content - provideds same text but specing reflects how it appears in html markup (shows everything but sytax)
//  - will return every element within thie selected element regardless if hidden or not (unlike innertext that return only what shows on webpage)
// Ex. - selects the textContent
document.querySelector(`p`).textContent
// 





// ----------------------------------------------------------------------------
// CAHNGING STYLES - change attribute value and apply a class ect..
// Ex. element/variableName/label .style(wont contain style set in seperate doc)
// select same name as css except everything is in camel case (font-size becomes fontSize ect..)
// seting selectod element to varible to then target attribute more easily
const h1 = document.querySelector(`h1`)
// that how we access style unfortunate only the inline style so if css in seperate file will give no values
h1.style
// attemting to determine color of element however only return Null as its set in seperate file and not [inline]
h1.style.color
// will only display or retunr aka Inline attributes set 
// WE Can however use above selector to change z attributes values
// Ex. - target h1 and changes its color to orange ( creates inline style which are not prefered)
// can set all properties via JS but not good practice (ok to use for one of things only)
h1.style.color = `orange`
// more examples
// const allLinks = document.querySelectorAll(`a`) - prevously defines (working with it)
// changes all link to color on "cyan"
for (let link of allLinks) {
    link.style.color = `cyan`
    link.style.textDecorationStyle = `wavy`
    link.style.textDecorationColor = `blue`
}
// NOTE issues with this although changes it, it creats all style in line which no bueno also 
// - inless we set those styles inline in the original html we can actually read/retrieve what the values are(can tell font size color type ect..)

// WAy to get computed style values - used simply h1 as we had already declared h1 element by that varibleName (aka no "") 
// window.getComputedStyle(h1)  
// -returns all css properties 
// to determine value of property use get computed style the alement selected then attribute name looking for 
// like so - (only works if query selected is set to varible.Label)
window.getComputedStyle(h1).color
// returns - the color value for h1
"rgb(255, 165, 0)"
// another example
window.getComputedStyle(h1).fontSize
"32px"
window.getComputedStyle(h1).fontFamily
// retunrs  :     ""Times New Roman""
// NOTE - this is not a selector its actual attribute/propertie value within the DOM






// ----------------------------------------------------------------------------
// CLASS LIST - best way to apply properties via JS
// how [re denined properties tied to class name that you then can apply and wnated with JS]
// - by setting attribute of class to .classNameWanted
// Ex. -
const h2 = document.querySelector(`h2`)
// set its class attribute to .purple - 
// -now whatever css properties are tied to said class name will be applyed to selected element
// h2.setAttribute(`class`, `purple`)
// changing to new name will override what yopu had previuosly
// h2.setAttribute(`class`, `border`)
// can also apply mutiple classes -
// Ex. set the h2 var to class of .border and .purple : and applyed all coresponding css properties
// not great to do this way if have several proprties or classes we wanted to apply
// h2.setAttribute(`class`, `border purple`)

// ClassList - with this can add classes without effecting existing once (think getting pushed in an array :adding)
// to add to selected elements classList (aka appling css properties)
// h2.classList.add(`purple`)
// to remove selected class for classList - 
// h2.classList.remove(`purple`)
// can also toggle classes - veryImportant (turn it on and off - properties applyed then not)
// can set action to toggle on off - but for now goes off everytime runnedbelowCode
h2.classList.toggle(`purple`)




// ----------------------------------------------------------------------------
// CREATING/REMOVING ELEMENTS - creating and removing existing or new elements
//  - creat element, add atributes, make changes then append
// Create Elemetnt - 
// Ex. - this creates empty element just : <h1> </h1>
const newH1 = document.createElement(`h1`)
// add atribute : this changes the inner text to "joe mama"
newH1.innerText = `joe mama`

// Appending Child - documnet.SectionWanted.appendChild - will always be added at bottom of selected sectionSelected
// this add the new element to the End of the <body>
document.body.appendChild(newH1)

// Append - appending to the inside at END of element/section selected newwer dont work in internetexplore
const p = document.querySelector(`p`)
// this add string of text to bottom of <p>e element aka the paragragh
// - can append text vs. changing inner text (note one add other changes whole thing)
p.append(`hi hi im new text`)
// Can add multiple thing at once

// Prepend - just like append but adds to Beging vs. End
// NOTE - above all examples of appending elements as children only 

// TERGET ELEMENT - targetElement.insertAdjacentElement(position, element);
// -gives us more flexibility then append /child 
// positions =  "beforebegin" - before elementSel, "afterend" - afted elementSel,
//   "afterbegin" - before 1st child of elementSel, "beforeend" -  after Last Child of elementSel
// Ex. use vars in example below
// const h1 = document.querySelector(`h1`)
// const newH1 = document.createElement(`h1`)
// inserted created newH1 below the 1st h1 that was put in var h1
h1.insertAdjacentElement(`afterend`, newH1)

// Removing Elements - 
// Remove child - slect child to remove from selected parent element (old way doing it )
// slect parent remove chld the element removing
// Ex. - remove like this or[can set parent to var then var.removeChild(newH1) - would accomplish same]
// select element then its parent and remove slected elment
newH1.parentElement.removeChild(newH1)

// Remove (new way) - much simpler to do select [dont work on internet explore]
// Ex. - var set to selected element then varName.remove() 
// imgSq.remove()
newH1.remove()
// used query select to target element then remove (removes benner image 1s image)
document.querySelector(`#banner`).remove()












// ----------------------------------------------------------------------------
// MANIPULATING ATTRIBUTES - select and change atribute of selected element object ect..
// - (thing like id class href in a tag ect..)
// Ex. selecting via attribute
document.querySelector(`#banner`)
// change by setting = to new idName like so
// notice dif in web page as css stying no long apply do to id Name change
document.querySelector(`#banner`)//.id = `banner1`
// can also slect and set to varible
// Ex. 
const firstLink = document.querySelector(`a`)

// Other attribute example [.src .id .class .href .title .]
// - can also accese select attribute via: method()
// GET ATRIBUTE
// Ex. can now use varible defined that represent that a tag 
// - and target ask for its href attribute directly
firstLink.href
// computed value coming from javascript (most times no dif but href case where there is)
//  returns : "http://127.0.0.1:5500/wiki/List_of_chicken_breeds"
firstLink.getAttribute(`href`)
// returns :  "/wiki/List_of_chicken_breeds"
// can use get attribute see what attribute has or avalible
// Ex. can check has id, class, 
firstLink.getAttribute(`href`)
firstLink.getAttribute(`id`)
firstLink.getAttribute(`class`)
firstLink.getAttribute(`title`)

// SET ATTRIBUTE
// - can also set attribute by selecting then providing additional argement that will be the new value
// Ex.  set Attribute (`selectodAttribute`, `newValueOfAttributeWanted` )
firstLink.setAttribute(`title`, `joe mama`)
// created in markup :  <a href="/wiki/List_of_chicken_breeds" title="joe mama">breed</a>



// ----------------------------------------------------------------------------
// TRAVERSITONG THE DOM - accessing an Elements decendants + ex. parents childern siblings next sibling ect...
// Ex, - pulling parents
let bold1 = document.querySelector(`b`)
bold1.parentElement // retunr <p> paragraph ht ebold in nested in
bold1.parentElement.parentElement // takes us to <body> alelment
bold1.childElementCount // will give us how many children contained insaid element
// Ex. - pulling children
let paragraph = bold1.parentElement
paragraph.children // [b, b, a, a, a, a, a, a] returns arrayLike list of children nested within element selected 
// Note - if nothing exist when pulling children or parent will return and Empty array []
// Ex. - pulling siblings
// nextSibling - 
const imgSq = document.querySelector(`img`)
imgSq.nextSibling
// returns : #text   - aka an empty nodewhite space hold no content/value (only return value nothing else)
// will sometimes return whats called a text node basicly brower making sense of whitespace
// nextElemetSibling - [the one we wnat to be using]
// will return the next sibling Element (same html level ect..)
imgSq.nextElementSibling
// returns :  <img class=​"square" src=​"https:​/​/​upload.wikimedia.org/​wikipedia/​en/​thumb/​e/​e0/​Male_Silkie.png/​460px-Male_Silkie.png" alt>













// Exercises - 
    // query selection
// const doneTodos = document.querySelectorAll(`.done`)
// const checkbox = document.querySelector(`input[type="checkbox"]`)

    // innertext 
// document.querySelector(`span`).innerText = `Disgusting` 

    // applying new property values
// const div = document.querySelector(`div`)
// div.style.textAlign = `center` 
// const image = document.querySelector(`img`)
// image.style.width = `150px` 
// image.style.borderRadius = `50%` 

    // apply array over several spnas
// here basiclyy have index's matching so they get applyed in order 0 with 0 1 with 1 ect..
    // set that index to that color and so forth
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!
// const num = document.querySelectorAll(`span`);
// for(let i = 0; i< colors.length; i++) {
//     num[i].style.color = colors[i]
// }
// this one creat var outside the increases as loop ran and setting to dif index to apply 
    // - whle for loop also running so that dif color gets applyed to next ans next
// let add = 0
// for (let dig of num) {
//     dig.style.color = colors[add];
//     add++
// }

    // classList
// const list = document.querySelectorAll(`li`);
// for (let li of list) {
//     li.classList.toggle(`highlight`)
// }

    // creating elements + adding attribute
// const div = document.querySelector(`#container`)
// // 0 count as 1 so no need for 101 just set to num wanted
// for(let i = 0; i < 100; i++) {
//     const buttons = document.createElement(`button`);
//     // can use simply append will not go into div : use appendchild or insert jacent element
//     div.appendChild(buttons);
//     // div.insertAdjacentElement(`afterbegin`, buttons);
//     buttons.innerText = `Hey!`;
// }


















