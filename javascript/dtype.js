// -----------------DIFFERENT DATA TYPES (BASIC/PRIMITIVE TYPES)
// R.E.P.L (read evaluate print loop)

// NUMBER: in javascript only one number type (+,-, or decimal)
    // ---can use for basic math using order of operations plus ect.. (can do power of with **)
    // ---(also something called modulo or "MOD" with % that finds reminder commonly used to determine if a number in EVEN OR ODD)
    // NaN = Not a Number ex. 0/0 meaningless but held value/classified of a number even if its not
// VARIABLES: giving/storing something a spesified value or classification for it ect.. a label per say to later be retrived
         // var values set with "let (var-name) = value"
         // think logicly program read line by line var values my change or not dependent when info was stored
         //  "+=" used to update value of existing var (not only add to existing with + sigh but = sign insure that result is now the new value of that var)
         // to add 1 or subtract 1 and have var-value updated can use shortcut of "--" to minus by 1 and "++" to add by 1 
    // CONST = constant (works just like "let" except value CANNOT be reassigned or change/d value after set)
         // for var that will not EVER change 
    // VAR = old way of making/setting variables values 
         // may run into in old stuff for now DONT USE ONLY USE LET FOR VARIABLES!!!!
    // NAMING VARIABLES RULES:
         // must be one complete thing no spaces can use "_" in plase of space
         // can contain but must not START with digit
         // can also use $
         // variable name are case sensitive
         // Camel case = every new word starts uppercase ex.(userNameLogIn)
         // better var name be meaningful than short and consis 
         // MAKE YOUR CODE READABLE!!!!!!!!!


// STRING: string of character 
          //must be surrounded in quotes ""
          // single double quote vice versa also applies like python
     //Strings are always indexed string from position 0 to ect..
          // counting always starts from 0 (zero)
          // note spaces are counted as a character
               // can get length of string using " (variableName).length" =counts # of character sarting from 1 as zero is not valid value for this
     //CONCATINATION/combinatiing works very similar to python "string" + "string"
          // seems that data type dont matter with .JS ()
               // so it actually defult to making both element into STRING type



// BOOLEAN: only 2 option either true or false (yes or no values)
         // variables can change type not common but can be done (value to boolean vise versa ect..)
         // in javascript booleans are always lowercase 



// NULL: intentional assignment of no value/but value of null (assigning the value to null)
     // Ex. let x = null then x = null


// UNDEFINED: varibles that dont have assingned value or result
     // Ex. `hello`[4] = "o" but if `hello`[9] = undefined (becuase nothing there)
     // Ex. let x = undefined then x = undefined
          // javascript saying "i dont know/what you want"



// SYMBOL & BigInt


// CHECKING TYPES
     // check type with "typeof (result/var)"
          // Ex. " typeof 1  " just like that no "" or ()