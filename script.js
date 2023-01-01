const buttons = document.querySelectorAll('.button');

let currentNumber = ""

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentNumber = currentNumber + button.innerText;
        console.log(currentNumber);
    });
});


// add event listener to numbers buttons
// user types in number, it shows up in input field. when they click on
// an operator, that number is captured and displayed as the result.
// So the function will 'add' each new number.

// user clicks button
// added to current string in input field
// when user clicks operand, capture the thing in the input field
// additionally, store operator in temp variable so I know what we're doing
// with the next number?
// repeat add infinitum