const numButtons = document.querySelectorAll('.button-number');
const opButtons = document.querySelectorAll('.button-operator');
const activeDisplay = document.querySelector(".calculation");

let stringNumber = "";
let currentOperator = "";
let userNumber = 0;

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        stringNumber = stringNumber + button.innerText;
        activeDisplay.value = stringNumber;
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentOperator != "") {
            // Change the active number
            console.log(userNumber);
            userNumber = add(userNumber, parseInt(stringNumber));
            currentOperator = button.innerText;
            console.log(currentOperator);
            console.log(userNumber)
        } else {
            userNumber = parseInt(stringNumber);
            currentOperator = button.innerText;
        }
        stringNumber = "";
    });
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

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