/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // // When the user clicks the clear button, remove all items from the list.
    // document.querySelector('')
    //     .addEventListener('click', clearList);

    // // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // // When the user clicks the add button, subtract the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
    const newNumber = document.querySelector('#list-number').value;
    const isNewNumber = parseInt(newNumber, 10);
    resetInput();
    // Append the number to our array.
    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.

    if(typeof isNewNumber === "number" && newNumber !== '' && isNewNumber === isNewNumber) {
        addToUL(isNewNumber);
        numbers.push(isNewNumber);
        console.log(`Numbers: ${numbers}`);
        
    }
    console.log(`NewNumber: ${newNumber}`);
    // Update our html.
}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    let index = document.querySelector('#list-number').value;

    // Remove the number at that index from the list.

    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    // Update our html.


}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.


    // Update our html.
    
}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToAdd = document.querySelector('').value;

    // Add value to everything on the list.


    // Update our html.

}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to subtract.
    let numberToSubtract = document.querySelector('#number-list').value;
    
    // Subtract value from everything on the list.
  

    // Update our html.

}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to multiply.
    let numberToMultiply = document.querySelector('').value;
    
    // Multiply value by everything on the list.
    
    
    // Update our html.
    
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToDivide = document.querySelector('').value;

    // Divide value from everything on the list.
    

    // // Update our html.plo
    
}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const ul = document.querySelector('#number-list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    ul.appendChild(newLI);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#list-number').value = '';
}