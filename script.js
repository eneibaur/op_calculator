const numButtons = document.querySelectorAll('.button-number');
const opButtons = document.querySelectorAll('.button-operator');

let stringNumber = "";
let currentOperator = "";
let userNumber = 0;
let answerNumber = 0;

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        stringNumber = stringNumber + button.innerText;
        console.log(stringNumber);
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        userNumber = parseInt(stringNumber);
        stringNumber = "";
        if (currentOperator != "") {
            console.log(currentOperator)
        } else {
            currentOperator = button.innerText;
            console.log(currentOperator);
        }
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