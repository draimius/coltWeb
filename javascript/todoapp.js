const todo = []
let input = prompt("start your to do list by typing 'new'")
while (input.toLowerCase() != "quit") {
    // input = prompt("what would you like to do?")
// QUIT TODO APP w/break
    if (input.toLowerCase === "quit") break;

// ADDING NEW TODO TO ARRAY AKA. LIST
    if (input.toLowerCase() === "new") {
        newTodo = prompt("enter new to do");
        todo.push(newTodo);
        console.log(`${newTodo} has been added to list`);
    }
    // console.log(`${newTodo} has been added to list`)


// VIEW EXISTING LIST
    if (input.toLowerCase() === "list") {
        console.log("============");
        for (let items of todo) {

            console.log(`${todo.indexOf(items)} : ${items}`);

        }
        console.log("============");
        input = prompt("what would you like to do? New/Delete/List");
    }

// DELETE ITEM FROM ARRAY(TODO LIST) ---------------
    if (input.toLowerCase() === "delete") {
        // print list then prompt
        console.log("============");
        for (let items of todo) {

            console.log(`${todo.indexOf(items)} : ${items}`);

        }
        console.log("============");

        let item = prompt("enter index of selected item 4 deletion");

        deleted = todo.splice(item, 1);

        console.log(`${deleted} has been deleted form list`)
        input = prompt("what would you like to do? New/Delete/List");
    }

    else {
        input = prompt("what would you like to do? New/Delete/List")
    }

}
console.log("You have Quit the App")




// NOTE - something would like to add is check that correct input is provided ex.insure when asking for index it 1.an existing index 2.that its an actual number
    // these check will be very important in production so let get familiar with them 

// THOUGHT - overall great job build it all by myself with what i learned and notes plus little googling but over all great job 
    // always like when i get same results but use different methods to get there. though very possible some of my code may be redundent and 
    // not formatted in best practices but that ok will continue to learn how and when to use what. glad where able to get the solution regarless of 
    // knowing this aim to have clean crisp effective efficient code lets grow learn and develope our skills to mastery.





















