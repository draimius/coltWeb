// STINGS METHODS = is simply an action 
    // written as Ex. "value.methodName()"
        // "success".toUpperCase()  =  "SUCCESS"
        // "   i want it    ".trim() = "i want it"
    // can chain methods together ex. " msg.trim().toUpperCase()"
    // written as Ex. "value.methodName(argument)"
        // Ex. "catdog".indexOf("dog") = 3 (dog starts at index 3)
        // Ex."catdog".indexOf("z") = -1 (value dosent exist within string output is a negative number)
            // .indexOf will provided position of when the 1st appears and not all
                // indexOf = simply tells position value of where starts
            // .slice() function = output is values in chosen start to optional/end positions
                // " .slice(startOfIndax, [endOfIndex])" 
                // "catdog".slice(0, 3) = "cat"
                // "catdog".slice(0) = "catdog"
                    // can also use (-) negative numnber and slice will operat in reverse from right to left 
            // .replace() = replaces selected value with specified replacment
                // .replacemnt - only replaces 1st value and not all
                // " .replace(replacee, replacment)"
                // Ex. "catdog".replace("cat", "dog") = "dogdog"
                // 
            // .replaceAll() = work just like replace but instead replaces all values with new vs. just the 1st apperance
                // Ex. "dogdog".replaceAll("d", "z") = "zogzog"
                // NOT RECOGNIZED BY ALL BROWERS
            // .repeat() = will repeat selected str/value # of times specified
                // written " .repeat(numberTimesWantRepeated)"
                // Ex. "catdog".repeat(3) = "catdogcatdogcatdog"
    // TEMPLATE LITERALS = alows us to embed expresion within a string 
        // [basicly use other data types within the string without having to end start "" multiple times
        // (sound like f-srting from PYTHON)
        // written with BACK TICKS ```` not single or double quotations 
            // can do maths within ${} - and results in a string data type
                // Ex.`Hello ${5 + 6} World` = "Hello 11 World"
                // Ex.`you bought ${q} ${product}. total is: ${q * price} `; = "you bought 5 grass. total is: 19.950000000000003 "(for now dont worry about repeat decimal - get literal operations down)
                // Can also use Methods Within the Literals
                    // Ex. `you bought ${q} ${product.toUpperCase()}. total is: $${q * price} `; = "you bought 5 GRASS. total is: $19.950000000000003 "
                


// NOTE - End every str/line of code in a semicolon ";"
    // dont relly see reason why use quote and instead use back slashs all the time 