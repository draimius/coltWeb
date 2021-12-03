// MORE ARRAY METHODS or array.prototype.methodName
    // Concat : combine arrays to creat new array  containing all values (does not change any values aka no effect to original array/ can set concated array to new variable)
        // Ex. let cats = ["miles", "mars"] and let dogs = ["bubbles", "ace", "choco", "fluffy"]    
            // -- then cats.concat(dogs) will = new array - ["miles", "mars", "bubbles", "ace", "choco", "fluffy"]
                // note order of array think left to right left is first then right array is added to that

    // Includes : checks if the sleced array includes/contains a specific value [returns a boolean value (true or false)
        // Ex. let dogs = ["bubbles", "ace", "choco", "fluffy"] 
            // --  then check if it includes specified value with : dogs.includes("ace") = true (becuse it does exsist within array if looking say for "meaty" returns "false as not in array")

    // IndexOf : used to find the position of a specified value. whether that be within an array or string a variable ect..
        // Ex. let cats = ["miles", "mars"] wnat position of "mars" we do : cats.indexOf("mars") = 1 (becuase in position 1 or order 1 as index count starts at zero "0")
            // Ex. "draimius".indexOf("s") = 7 
            // note also use to determine if a value exist in said string/variable/arrays ect.. if dosent exisit indexOf will always return = -1 "negative one"
            // note if same value appers more then once indexOf will locate only the first time it appears and not all positionings
                // --requires an argument aka somwthing withing the ()

    // Join : allows us to creat and return a string that is made up os the selected array(becomes one simgle item)
        // Ex. let dogs = ["bubbles", "ace", "choco", "fluffy", "bubbles"] then :  dogs.join() = "bubbles,ace,choco,fluffy,bubbles"
            // Ex. let dogs = ["bubbles", "ace", "choco", "fluffy", "bubbles"] then :  dogs.join("") = "bubblesacechocofluffybubbles"
                // Ex. let dogs = ["bubbles", "ace", "choco", "fluffy", "bubbles"] then  :  dogs.join("-") = "bubbles-ace-choco-fluffy-bubbles"
                // note the variations in () out put can vary dependent what in () from nothing to "" , + , - ect..

    // Reverse : just like then name it reverses the selected array (reorders it know as i DESTRUCTIVE method as "destroys original array")
        // Ex. let dogs = ["bubbles", "ace", "choco", "fluffy"] then  dogs.reverse() = ["fluffy", "choco", "ace", "bubbles"] (and this becomes the new order of array)

    // Slice : allows us to extract a specified portion of an array with a start and optional end value (values select array positions )
        // Ex. let dogs = ["bubbles", "ace", "choco", "fluffy"] then say only whant middle two : dogs.splice(1, 3) = ["ace", "choco"] 
            // note notice range and out put. range 1 - 3 but only position 1 and 2 appear (can think of start incudes(1) up to end(3) but not including end)
                // --or startPosition <= output < endPosition
            // can also utilize negative values/numbers# and selected range will start from end vs begining of arrays

    // Splice : allows us to remove and add 1 or multiple value into an array at a specified position DESTRUCTIVE method [variable.splice(position, #deletions, valueBeingAddedIfAny)]
        // Ex. let months = ["jan", "mar", "april", "june", "may"] june in wrong place want to delete : months.splice(3, 1) =/returns ["june"]
            // --- new arrays/variableValues :  months = ["jan", "mar", "april", "may"]  
                // note value deleted was the one in the exact position selected "3" and selected to only delete "1" item 
                    // if say we selected same position but instead of "1" we deleted "2" return/= would be ["june", "may"]
                        // --- making new array/variablValues :  months = ["jan", "mar", "april"]
        // Ex. let months = ["jan", "mar", "april"] say wnated to add febuary aka "feb"  :  months.splice(1, 0, "feb")
            // --- new arrays/variableValues :  months = ["jan", "feb", "mar", "april"]  
                // note value is added in the exact position selected this case "1" and "0" for #of values deleted becuase were adding and not deleting anything
            // say i wnated to add more then one value to months say "june" and "july" after may  :  months.splice(5, 0, "june", "july")
                // --- new arrays/variableValues :  months = ["jan", "feb", "mar", "april", "may", "june", "july"]

    // Sort : sorts the array  [ will vary on the type of sorting done with functions(but not there yet) ]
        // defult sorting dosent make much sense (uses only 1st number)
            // once we get to function will have much more use for this




    // NOTE --for all method themselves can be uses to set specified new variable
    // -- descructive method means it effects the oiginal variblesValues (changing order or what values exist in the array)