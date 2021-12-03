//PROTOTYPES, CLASSES
// & OOP (OBJECT ORIANTATED PROGRAMMING)
//about how we structure our code and desing are application ect..
//breaking thing up into patterns of objects (like recipies)
// creating recipies or method by wich your code will work with (guidline kinda) or a proceedure 

// OBJECT PROTOTYPES (CONCEPTS) ***===============
//mechanism by which javascript object inheriet feture from one another
//tke array as example instead of us  creating a method ex. arr.sing = function(){console.log(`i create proto`)}
// -it give us a pre set libary to work with all under the `proto` things like .push(), .splice() .length ect libary of preset actions avalible with arrays
//rather then having a push method defined on each array they all share the prototype that gives acces to siad libary of methods
// the one object `prototype` that gives access to each individual  method within its libary(differnt libarie for different things)
//- we have libary for arrays objects document string ect..
//We can also add any libary to our create element i can add array libary to my object or string ect.. (can assign prototype libaries to other things)
//creating a method  same thing as creating a funtion 
String.prototype.yell = function () {
    console.log(this.toUpperCase());
};// side note this refernce to whatever is on the letf of `.` preriod
`hellooo worldd`.yell();  //returns: HELLOOO WORLDD
//we added to the string our method we created 
//not great idea to do this way but good example
// We can also replace existing prototypes jsut like setting a variable (reassign existing proto)
// Ex.   Array.prototype.push = function() {consol.log(`hi im new push mathed actions`)}
// __proto__ is simply a reference while example.prototype is the one we can add to and/or make changes (very rare youd acoully don anything with __proto__)  




// DEFINING CLASSES ***=============== 
//syntax sugar sweeter cleaner way of doing somthing 
//benifits  dont have to add prototypes seperatly
class Color {
    constructor(r, g, b, name) {//adding constructor inside of class (this will auto execute whenever a `new` color is created, aka new` keyword is used)
        // console.log(`in constructor`)
        // console.log(r, g, b)
        this.r = r; //with this properties are being assigned to every color `called` aka get the rgb and name ect.. (properties NOT to the proto but only the color)
        this.g = g;//this will auto refer to a new ly created object / same properties of new still apply
        this.b = b;//very simmilar to previous set up 
        this.name = name;//any value that we will  repeataly use we want them in the instance that way they always exist in the object (that now we can refer to them in methods created)
        this.calcHSL(); //can also call a method within the ionstince that way it auto run *in this case creating values that we'lll later use and access
    }//in the constructor is always the values things we'll reference with `this`
    rgb() {//important to always utilize the `this` ley word in this way we refernce that speciofied value
        // ***** can also simply set const {r, g, b} = this;  and  return same thing as below jsut without the `this` in every value(that will reference the whole object and we pull value s within it)
        return `rgb(${this.r}, ${this.g}, ${this.b})`; //when its bieng pased through like- new Color(0, 6, 255, `forest`) it eccespt r, g, b so that becomes the this we refence
    }   //methods are auto added as methods to the Color `class` all loking up to the `constructor`
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }// MORE Class Practice-- adding another vid staritng here
    hex() {
        const { r, g, b } = this;//did this way just to show how hex and rgb can achieve same pull of rgb value in dif ways
        //this colt calls destructuring it (i guess to then be pulles or called  to access values)
        return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString().slice(1);
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`//number percent then percent

    }
    calcHSL() {//logic dont matter here were focused on how the classes methoid and instinces work all together
        //we set this as method within proto to be called in the instince to produce values we can the use later
        let { r, g, b } = this;//this makes is so dont have to pass rgb as argument
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b);
        let cmax = Math.max(r, g, b);
        let delta = cmax - cmin;
        let h = 0;
        let s = 0;
        let l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)

            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;
        h = Math.round(h * 60);

        if (h < 0) h += 360;
        l = (cmax + cmin) / 2;

        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;//this defin es the value after the caulation were now exist in the object after the methiod is called 
        this.s = s; //now thier aprat of object created beccuse method was called in instinse 
        this.l = l;
    }
    opposite() {//give us opposite number in color wheel
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;//adding 180 to hue to get opposite in color wheel/ 360 keeps value in check
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }
    fullSat() {
        const { s, l } = this; //basiclly instead of passing as argument we set what value we'll be using to `this`
        return `hsl(${newHue}, 100%, ${l}%)`
    }






    greet() {//this is now included as a method for Color ex. new Color(255, 6, 0, `tomato`).greet() or color1.greet() same thing jsut on in varible 
        return `hello from ${this.name}!`;//this is added method BUT is Not apart of the instinces aka the auto executes
    }      //we dont have to do Color.protorype.ect.. for every method we want to define
}


//advantage 
//we dont have to do Color.protorype.ect.. for every method we want to define
const color1 = new Color(255, 6, 0, `tomato`);//this was never called but will auto run (everytime new Color is `invoked` all code will auto run)
// color1 returns object :  Color {r: 255, g: 6, b: 0, name: "tomato"}
new Color(0, 6, 255, `forest`).greet()
// returns :  "hello from forest!"
color1.hex()
// retunr :  "#3490432"
const color2 = new Color(0, 6, 255, `forest`)
color1.hex === color2.hex
// returns:  true    dont call them not comparing the values but the method referenced

//NOTE Color() - cant be called like that wothout the `new` keyword
//need to use new class and constructor

//CALLING MATHODS WITHIN OTHER METOD/CREATION METHODS **************  
// (basicly use this to refernce and use other methods within  your method(where this references the original constructor color and its values, including its method created)
// this referencese that w=hich in the class and constructor ( 1st thing in class is alwyas the constructor)
// innerRGB() {
//     const {r, g, b} = this;
//     return `${r}, ${b}, ${b}`;
// }
// rgb() {
//     return `rgb(${this.innerRGB()})`;
// }
// rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
// }





// EXTENDS AND SUPER ***===============
// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     meow() {
//         return `MEOWWWW!!`
//     }
// }
// class Dog {//vary similar to eachother and lots of duplication (how can we better this?)
//     constructor(name, age) {// we can create child classes
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
//     bark() {
//         return `AGHRRFFF!`
//     }
// }


// let kiki = new Dog(`kiki`, 3)
// let mile = new Cat(`miles`, 4)

//EXTENDED
//better way to do above and not have redundencies
class Pet {// constructor here 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {//cat call eat on all dog cat and pet - diog and cat have extended functinaly from parent class `Pet`
        return `${this.name} is eating`//if it dosent find the eat in specified Dog and Cat class looks to parent Pet
    }
}
// class Cat extends Pet {//no constructor on CAt or Dog
//     meow() {
//         return `MEOWW!!`;
//     }
// }
class Dog extends Pet {//now this set to be a class extended to the parent class of Pet
    bark() {
        return `ARGHFFF!!`;//saem thing is true for cat
    }//we have acces to `bark` and `eat` even though `eat` not in dog but exist in the perant which becuse its an 
}       //extended it has access to whats within the parent
//not calliong pet but Dog and Cat
let kiki = new Dog(`kiki`, 3)//when setting nothing pass thorught on dog or cat 
//let mile = new Cat(`miles`, 4)//(becuase extended it looked to the parent class `Pet` to fill values of name and age)

// kiki  -  object returned below
// Dog {name: "kiki", age: 3}
// age: 3
// name: "kiki"
// __proto__: Pet
// bark: ƒ bark()           //bark within `Pet`
// constructor: class Dog   //---dog exist within `Pet`
// __proto__:
// constructor: class Pet
// eat: ƒ eat()         //---eat exist within `Pet`
// __proto__: Object

//SUPER  - `super class` = `parent class`
//when you wanna rely on what being called in the `parent` class
class Cat extends Pet {//say i wanted to add/pass more info to Cat class
    constructor(name, age, livesLeft = 9) {//but here i dont completly get why use constructor to pass name and age again (becuse we refernced with super below????)
        super(name, age);//super refernce to the Parent its extended to thwe ``Perant class per say
        this.livesLeft = livesLeft;//i get why use super to refernce parenclass and use those values ect..
    }//i guess we do constructor again to inform it all info that we'll be passing in even if some is refrenced from super
    meow() {
        return `MEOWW!!`;
    }
}

let miles = new Cat(`miles`, 4)













// // THE `NEW` KEYWORD (4THINGS IT DOES) [better way better with classes] **===============
//     // `new` keyword is an operator
// function Color(r, g, b) {
//     // console.log(this); //in this case `this` referce to the nearest object bing the wondow 
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// // new Color(224, 43, 5);
// //creates new black ojbect 
// //liks `this`(constructor) to other object, this case to Color()
// //passes new object as the `this` in function
// //returns `this` if the fucntion dosent return it own object
// Color.prototype.hex = function () {
//     const {r, g, b} = this;
//     return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString().slice(1);
// };
// Color.prototype.rgb = function () {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`
// }//.rgb is now defined within the proto meaning can be accessed by any calling back wiout each having its own individual copy of properties("shared prototype object")
//     // - reason is now under proto is because added to `Color` which is added on to constructor making it a proto per say 
//         // - everytime its called with `new` creates that new object
// const color1 = new Color(255, 0, 0);
// const color2 = new Color(25, 34, 0);

// Color.prototype. rgba = function(a=1.0) {//defualt value of 1 in event now input
//     const {r, g, b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
// const color2a = new Color(25, 34, 0).rgba(.6) //returns "rgba(25, 34, 0, 0.6)" cahnging its transperancy

//     //IMPORTANT function Color does nothing on its own its wehn keyword `new` is introduced that it oporates
//     //we created ("shared prototype object")
// //NOTE when using `this` DO NOT use arrow function (this behaves diff in arrow functions then reg)







// // DEFINIG CONSTRUCTOR FUNCTIONS (OLD WAY) [dont use this] *===============
//     //factory function - not preffered as ther are better options to accomplish the sme
// function hex(r, g, b) {
//     return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString().slice(1);
// }
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }
// //factory function
// function colorMake(r, g, b) {
//     const color = {};
//     //created an object where a below keys and values will be stored
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const  {r, g, b} = this;//inthis case this referce to the object itself aka `color`
//         return `rgb(${r}, ${g}, ${b})`
//     };//nothing in argument for below as not neede (if thier all in same object aka`color` they can access eachother without having to add in argument)
//     color.hex = function() {
//         const  {r, g, b} = this;
//         return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString().slice(1);
//     }
//     return color;
// }
// const firstColor = colorMake(35, 255, 150);
// firstColor.hex(); //make hex color  "#9136406"
// firstColor.rgb(); //make rgb color  "rgb(35, 255, 150)"
// //can also update rbg value at any point be simply reassigning value:  color.r = 33; ect..
//     //NOTE - shortfalls each object has a unique copy of all the others (everytime we pass in def values in rgb evry variation is gonna have individul copyof all the functions)
//     // - not nessesary an redundencies for each pass through to have own copy of every created property(function)
// //NOTE when setting constroctors or classes we name the with uppercase 1st letter example Exmaple  ==== coment start here =======


