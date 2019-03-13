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
    document.querySelector('#clear')
        .addEventListener('click', clearList);

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
    }
    // Update our html.
    updateUL();
}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    const str = document.querySelector('#list-number').value;
    const index = Number(str); 
    // Remove the number at that index from the list.
    numbers.splice(index, 1);
        // ### Hints:

    //     * You can either loop through... or use array methods. Check out concat!

    //     * Either way, though, we've declared out array using `let` this time,
    //     and reassigning the array is probably the best approach with our current
    //     tools.
    // */

    // Update our html.
    updateUL();
}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Clear the array of all values.
    while(numbers.length > 0) {
        numbers.pop();
    }

    // Update our html.
    clearUL();
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
    const numberToAdd = document.querySelector('#number-for-math').value;
    const isNumberToAdd = parseInt(numberToAdd , 10);
    // Add value to everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] + isNumberToAdd;
    }

    // Update our html.
    updateUL();
}

function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to subtract.
    const numberToSubtract = document.querySelector('#number-for-math').value;
    const isNumberToSubtract = parseInt(numberToSubtract, 10);
    // Subtract value from everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] - isNumberToSubtract;
    }

    // Update our html.
    updateUL();
}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to multiply.
    const numberToMultiply = document.querySelector('#number-for-math').value;
    const isNumberToMultiply = parseInt(numberToMultiply, 10);
    
    // Multiply value by everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * isNumberToMultiply;
    }
    
    // Update our html.
    updateUL();
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    const numberToDivide = document.querySelector('#number-for-math').value;
    const isNumberToDivide = parseInt(numberToDivide, 10);
    // Divide value from everything on the list.
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] / isNumberToDivide;
    }

    // // Update our html.plo
    updateUL();
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
    const ul = document.querySelector('#number-list');
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