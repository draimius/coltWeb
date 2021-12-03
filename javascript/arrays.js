// ARRAYS : allows us to store multiple data value together in one variable ( DATA STRUCTUREs)
// -- ordered slots ( note- when do typeof tells us object so are we creating one with arrays creating a libary)
    // CREATING
        // asigning collection of value to a variable in order regardless if needed each with its OWN POSITION/INDEX
            // Ex. let colors=["red","orange","yellow"] = (3) ["red", "orange", "yellow"]
                                                            // 0: "red"
                                                            // 1: "orange"
                                                            // 2: "yellow"
                                                            // length: 3
                                                            // __proto__: Array(0)

            // Ex. let lottonumbers = [12,43,51,85,234] = (5) [12, 43, 51, 85, 234]
                                                            // 0: 12
                                                            // 1: 43
                                                            // 2: 51
                                                            // 3: 85
                                                            // 4: 284
                                                            // 2: 51
                                                            // length: 5
                                                            // __proto__: Array(0)

            // -- NOTE can be all diff kinds of data types
            // Ex. let lottonumbers = [12,43,51,85,234] = (4) [true, 68, "cat", null]
                                                            // 0: true
                                                            // 1: 68
                                                            // 2: "car"
                                                            // 3: null
                                                            // length: 4
                                                            // __proto__: Array(0)
    // Pulling Info Out Of Array : pull info using the arrays Indexed Values
        // Ex. let colors=["red","orange","yellow"] then colors[1] = orange

    // UPDATING
        // Ex. let colors = ["red","orange","yellow"] then colors[0] = "white"
            // -- Now colors = ["white","orange","yellow"]
        // Ex. let colors = ["red","orange","yellow"] then colors[0] = 33
            // -- Now colors = [33,"orange","yellow"]
        // WORKS on const and let whether nested arrays or simgle select positioning with [] "brackets your = then value you want to place there"

    // ADDING TO ARRAYS
        // Ex. let colors = ["red","orange","yellow"] then colors[3] = "purple"
            // -- Now colors = ["red", "orange", "yellow", "purple"]

            // also if add in position/index that is not next on in line (will add empty spaces to fill in array)
                // -- this will also increase its length
        // Ex. let colors = ["red","orange","yellow"] then colors[6] = "purple"
            // -- Now colors = ["white", "orange", "yellow", empty × 3, "purple"]
                // note -- new length is 7 and if index[emptyspace]: colors[4] = undefined
    

    // PUSH & POP = .push() and .pop()
        //Push = method allows you to add to the end of an array (this way dont need the index just get added to the end) (incresing arrays length)
            // Ex. let line = ["tom", "mary", "joseph"] then line.push("sam") now line = ["tom", "mary", "joseph", "sam"]
        // Pop = method allows us t remove from the end of the array without having to knows its index [ no argument in need in the " () "] (decreasing arrays length)
            //  let line = ["tom", "mary", "joseph", "sam"] then line.pop() returns "sam" now line = ["tom", "mary", "joseph"]
                // -- note: can be use to = a variable Ex. let next = line.pop() returns "sam" that becomes next / then next = "joseph" and removed and so forth
 
    // SHIFT & UNSHIFT
        // Shift = method allows us to remove from the start of the array [ no argument in need in the " () "]
            // Ex. et line = ["tom", "mary", "joseph", "sam"] then line.shift() returns "tom" now line = ["mary", "joseph", "sam"] (decreases arrays length)
                // -- note: can be use to = a variable Ex. let next = line.shift() returns "tom" that becomes next / then next = "joseph" and removed array and so forth
        // Unshift = method allows you to add to the start of an array
            // Ex. let line = ["mary", "joseph", "sam"] then line.unshift("tom") now line = ["tom", "mary", "joseph", "sam"] (increses arrays length)


    // CONCAT, INDEXOF
     // IndexOf : used to find the position of a specified value. whether that be within an array or string a variable ect..
        // Ex. let cats = ["miles", "mars"] wnat position of "mars" we do : cats.indexOf("mars") = 1 (becuase in position 1 or order 1 as index count starts at zero "0")
            // Ex. "draimius".indexOf("s") = 7 
            // note also use to determine if a value exist in said string/variable/arrays ect.. if dosent exisit indexOf will always return = -1 "negative one"
            // note if same value appers more then once indexOf will locate only the first time it appears and not all positionings
                // --requires an argument aka somwthing withing the ()


    // SLICE AND SPLICE
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

    // MULTI DEMINSIONAL ARRAYS








    // NOTE -- Length count starts from 1 | Index count starts from 0
    // -- Methods specificly always end in " () " and start with period
        // Ex. .push()