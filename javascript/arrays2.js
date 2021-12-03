// === with Arrays
    // Ex. [`hi`, `bye`] === [`hi`, `bye`] = false
    // Ex. [1] === [1] = false
    // Ex. [] === [] = false
        // WHY?
        // -- working with array we dont compare contents. what it care about is the memory(space taken up)
            // when do [1, 2, 3] that array itsself has its own "identity" per say so when i type that same thing again [1, 2, 3] now this array also has its own "identity"per say
            // --- completly different from the first array completly ignoring that they contain same value and apper same to eye. (THEY DONT REFER TO THE SAME THING IN MEMORY)
    // Ex. let luckyNums = [2, 43, 77] then creat new var : lottoNums = luckyNums
        // then :  lottoNums === luckyNums = true 
        // WHY?
        // --- becuase the are both pointing the same idintity or same place withing the memory(luckyNums is set and lottoNums points to same place being again luckyNums)
        // --- both variable are link both point to the same place "identity" and a change to one creats the same change to the other
            // Ex. lottoNums.push(33) now both luckyNums and lottoNums = [2, 43, 77, 33]
        // CONST AND ARRAYS
            // With that being said going over why const are not re-assigned and how they work with arrays
                // CONST are the "identity"/locationInMemory we utilize while you can not re-assign the const we can however change it Contents"
                    // --- this way there no issue "locating the const but can still edit its contents however we wish (deleted add sort reverse remove alltogether ect..)

    // NESTED ARRAYS
        // can have an arrays of arrays
            // Ex. let gameboard = [["x", "o", null], ["o", "x", "o"], ["o", "x", "x"]] : gameboard = [Array(3), Array(3), Array(3)]
                                                                                                    // 0: (3) ["x", "o", null]
                                                                                                    // 1: (3) ["o", "x", "o"]
                                                                                                    // 2: (3) ["o", "x", "x"]
                                                                                                    // length: 3
        // Locating specified value in nested arrays use stacked index req qith : [positionValue]
            // Ex. say i want to pull the null i use  :  gameboard [0][2] = null
                // note 1st value selects the araays im targeting then the position in that array is the 2nd value (works same way if there were more nested elements like arrray withing array within array ect..)
                                                                                
// OBJECTS AND OBJECT LITERALS  - key-value-pairs that store labeled data  (2nd data strcture after arrays)
    // Objects : collection of properties (key-values-pairs) rather then using index to locate we use cutom keys (common to utilize CONST (are reference type))
        // --labeling information - name : "jose"
                            //  lastName : "ramirez"
                            //  username : "draimius"
                            //  password : joe123mama*

        // Ex. const person = {fisrname: "jose", lastname: "ramirez", username: "draimius", age: 24, gender: "male"}
            // --- person returns same object collecition of data pair/labeled data = {fisrname: "jose", lastname: "ramirez", username: "draimius", age: 24, gender: "male"}
                // note can format each type to new line just to read simpler
                // note data type dosent matter
                // note no real order dosent matter as long as we have its coresponding label
                // note value can also set to be an array or another objet ect..
                // note object declaring is done with {} curly braces

    // PULLING INFO FROM OBJECTS - accessing info alwyas doen with [""] brackets and "" within
        // we have two option one simpler than other 
            // Option 1 is accessing info with [""] brackets and "" within 
                // Ex. person["age"] = 24
            // Option 2 is simply using labelname or "KEY"
                // Ex. person.username = "draimius"
        // NOTE when object key is declared it is converted to a STRING Data Type - regars of its original type (wehter str, ing, bollena ect..)

    // MODIFYING AND OBJECT
        // UPDATING : we do be selecting we select the object via its const or let Name then the KEY name (dont matter whether by or [""] or simply .  )
            // -- once selected just like updating a varible set = then new value 
                    // Ex. const person = {fisrname: "jose", lastname: "ramirez", username: "draimius", age: 24, gender: "male"}
                        // --- SAY i want to update the age to 25 :  person.age = 25 or person["age"] = 25
                            // now person = {fisrname: "jose", lastname: "ramirez", username: "draimius", age: 25, gender: "male"}

        // ADDING TO OBJECT : since oder dosent matter we we simply select object give KEY name and set = to value wanted and BAM its added
            // -- can be done both with simply .notation or the [""] bracket perenteces
                // Ex. const person = {fisrname: "jose", lastname: "ramirez", username: "draimius", age: 24, gender: "male"}
                    // -- then want to add color key and value :    person.color = "green" or person["color"] = "green"
                        // now person = {fisrname: "jose", lastname: "ramirez", username: "draimius", age: 24, gender: "male", color: "green"}

// ARRAYS WITH OBJECTS : common to have array of object much more powerful this way when work together (varydependent on the type of data stored)
    // CREATING : object nested in arrays and vise varsa (put on seperat line easier to see)
        // Ex. let post = [{username: "draimius", comment: "jaja", likes: 33}, 
                        // {username: "EsojTheGreat", comment: "Nooice", likes: 22},
                        // {username: "kikapo", comment: "i see juu", likes: 11},] 
            // one big array done with [] containing severa object made with {} and , between each one 

    //LOCATIONG ?TARGETING INFO : very similar to targeting in arrays just adding aspect of the "KEY" names
        // slect object then position of array wanted then the KEY withing that array wanted that correlates to value wanted  objectName[arrayPosition].KeyName
            // Ex. let post = [{username: "draimius", comment: "jaja", likes: 33}, 
                            // {username: "EsojTheGreat", comment: "Nooice", likes: 22},
                            // {username: "kikapo", comment: "i see juu", likes: 11},] 
            // say i wanted output of "kikapo" :  post[2].username = "kikapo"








// NOTE in [] bracket can select a a predetermined variable/let pointing within object (variable can point to a KEY/label that then gives that KEY's value)
// --- now if we use [] for an aboject key/label it must be within "" within the [] brackets ["KEY"] (lets u evaluate before pulling info:not completely sure what tha means???)
// --- and for .notation for object can select a key within the object but not a predetermined variable/let variable does not work







