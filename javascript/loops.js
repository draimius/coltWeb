// LOOPS : repeat funcionality withouth having to copy and paste same code several times
    // -make code more effective and efficient less cluncky


    // FOR LOOPS:  for(initianlExpression; condition; incrementalExpression)  -  written similar to if statment where after use {what to do if meets perameters}
            // Know how your loop is going to stop!!!!!!!!!
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
    // Ex. gives same result as above (i variable id definied specificly for this loop)
        // note i = 1 then checks if i is lessthan or equal to 10 and if is moves on to i + 1 = updated i variable and repeats till 
            // seem variable is utilized for purpose of setting perameters around it to specify selected # of time youd like code to loop/run
            // variable then range then variable change/update

// for(let i = 1; i <= 10; i+=1){
//     console.log(i)
// }

    //Ex. output dosent have to be variable itself can be whatever you chose variable just there to specify #of loops 
// for(let i = 1; i <= 6; i+=1){
//     console.log("Da ba dee da ba daa")}

    // Ex. print only even number from 2 - 20. [how can we achieve this??]
// for(let i = 1; i <= 20; i += 2){
//     console.log(i)
// }

    // Ex. counting down form 100 by 10's
// for(let i= 100; i >= 0; i -= 10){
//     console.log(i)
// }
             // INFINITE LOOPS: NOT GOOD never stopping loop not good for brower or pc istself will run trhough all memory and potentialy crash




    // NESTED LOOPS :   is a loop withing a loop
        // note -- very similar to if statment where the nested code will not run unless 1st ifs papremeters are met 
// for(let i = 1; i <= 10; i++){
//     console.log(`pair ${i}`)
//     for(let j = 1; j < 3; j++){
//         console.log(`   number ${j}`)
//     }
// }

    // Ex. in this one assing first loop to variable
// let seating = [["jimmy", "john", "jake"], 
//                 ["sam", "andrew", "colt", "james"], 
//                 ["erica", "victoria", "amalia"]]

// for(let i = 0; i < seating.length; i++){
//     let row = seating[i];
//     console.log(`ROW # ${i + 1}`)
//     for(let j = 0;  j < row.length; j++){
//         console.log(row[j])
//     }
// }





    // WHLE LOOPS : will run till false/ very similar to for loop just dif syntax[ while you have/havenot done something - do this]
        // note -- good when dealingth with variables where we dont know how many times we'll need to run the loop
// let count = 0
// while(count < 10){
//     count++;
//     console.log(count)
// }
    // note -- good when dealingth with variables
// while(!gameOver){
//     // player 1 move
//     // player 2 move
// }
    // Ex.
// let secret = "babyhippo"
// let guess = prompt("enter the secret code..");
// while(guess !== secret){
//     guess = prompt("enter the secret code..")
// }
// console.log("you got it !!!!!!")


    // BREAK KEYWORD : a parameter that when met the loop will stop running (break is a way of escaping a loop)
        // use break when working with unknows number of iterations needed aka varibles
        // note -- used with a while loop and a if withing the loop to define break keyword
    // Ex. this example as long as prompt = prompt code runs intill breakKeyWord this case "quit" after the break out of loop and stops running
let input = prompt("hey there!!")
    while(true){
        input = prompt(input);
        if(input.toLowerCase() === "quit") break;
}
console.log("okie dokie")



    // FOR ...OF LOOP : work very similar to for loop BUT help with making thing simpler (for arrays, nested, objects ect..)most often arrays
        // makes a variable of the array itsself then to acces nested values creat variable of the original varable 
            // in this way no indexes are needed simpler to read and write and not using an "i" for sole purpose of counting use to go in each index
        // Ex. "for" (varible "of" iterable) { statment}

// let seating = [["jimmy", "john", "jake"], 
//                 ["sam", "andrew", "colt", "james"], 
//                 ["erica", "victoria", "amalia", "END"]]
// for(let row of seating){
//     for(let student of row){
//         console.log(student);
//     }
// }
    //same result but done with nested for loops 
// for(let i = 0; i < seating.length; i++){
//     let row = seating[i];
//     // console.log(`ROW # ${i + 1}`)
//     for(let j = 0;  j < row.length; j++){
//         console.log(row[j])
//     }
// }






    // ITERATING ARRAYS(LOOPING ARRAYS) : seem utilize to pulll all info out array in fews line code posible enter the loop
        // so that we dont have to know howmany time we would need to loop, in case of large arrays 
    // Ex.
        // the i in the case same purpose as before but know dealing with the index within the array/it posistioning
            // note -- in this case we can set it to parameter not difined by specified # but by the end of the array its highest index is hwere the loop stops 
            // note -- in the print i represent its values index/position in array and the animal[] will print what ever value is present in the [#](num in brackets) position
            // note -- becuse the length is always greater by one (3) compared to the highest index (2) is why we set to the arrays length 
            // note --  the arrays length is the stopping point and will stop at very end this case length of three meaning stops at index of 2
            // note -- then the +1 is just so that it runs trought all index's and strting at 0 becuse that how index counting atarts at 0
let animals = ["LIONS", "TIGER", "JAGUAR"]
// for(let i = 0; i < animals.length; i+=1){
//     console.log(i, animals[i]);
// }
    // Ex. now reversing tha way it consoles array
        // note -- instead of number flip or do negative or reversing array(WE FLIPED the variable value and the parameter - parameter became the variable value and the variableValue the parameter interenting)
// for(let i = animals.length - 1; i >= 0; i-=1){
//     console.log(i, animals[i]);
// }
    //Exircise 
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
// for(let i = 0; i < people.length; i++){
//     console.log(people[i].toUpperCase())
// }

    // ITERATING OBJECTS: itterating object - object being the collection of keyword and value pairs (not common)
    // Ex. of an object/ although it is an object it is not an ITERABLE Objest meaning cant be looped as is
const scores = {
    jerry: 90,
    timmy:91, 
    sam: 85,
    joey: 99,
    colt: 100, 
    jose: 98,
}
// console.log(scores)
//         // TWO OPTIONS to iteral or loop object
//              // 1.use keyword and for "in" loop (uncommon loop)
// // person "in" scores give you the key/labels. person bieng new variable set to represent all labels in siad object
// for(let person in scores){
//     // once set variable for all label we add the scores/array to [person/index] to pull out the value said label/key represents
//     // also note can be pulled out spereatly and dont have to be together 
//     console.log(`${person} : ${scores[person]}`)
// }
             // 2.Use special new mathed for iterating objects
                // these are:
                    // Object.keys(targetedObject) - which give us all label/keys in the form of an array
                    // Object.value(targetObject) - which gives us all label/key Values in the form of an array
                    // Object.entries(targetObject) - which gives us a nested array of all key+value pair within selected object
                // key thing about these is that chnges format into arryas the can be looped and iterated
// able to use "for of.." loop since we'll be working with array due to Object.method
for(let score of Object.values(scores)){
    console.log(score)
}
// same thing here as example above only ifference is that pulling key/label here vs. values
for(let person of Object.keys(scores)){
    console.log(person)
}
// Ex. looking to get avg grade simple set of varible
let total = 0
// this one seting a varible to the trasformed values of an object from keyPairs to array
let grades = Object.values(scores);
// here able to use "for of cuase working with array"
// also set var representing each individual value of the array
for(let score of grades){
    // here simply making total by adding all of each scores up to eachother = the new set variable of total
    total += score;
    // if log inside loop provideds total every time and addition is made
    // console.log(total)
}
// Vs. outside the loop only provideds us the total us all all together aka logs after all the math is done
console.log(total)
// here in this casewe can now do expression to find ag due to both values being asigned to variable and and before that assining to an array vs. object.
console.log(total/grades.length)





