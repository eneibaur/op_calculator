const numButtons = document.querySelectorAll('.button-number');
const opButtons = document.querySelectorAll('.button-operator');
const activeDisplay = document.querySelector(".calculation");
const clearButton = document.querySelector(".clear");
const history = document.querySelector(".current");

let stringNumber = "";
let currentOperator = "";
let userNumber = 0;

clearButton.addEventListener('click', () => {
    stringNumber = "";
    currentOperator = "";
    userNumber = 0;
    activeDisplay.value = "";
    history.value = "";
});

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
            console.log(currentOperator)
            userNumber = operate(userNumber, parseInt(stringNumber), currentOperator);
            currentOperator = button.innerText;
            history.value = userNumber + " " + currentOperator;
            activeDisplay.value = userNumber;
            if (userNumber == "nice try"){
                userNumber = 0;
            }
        } else {
            userNumber = parseInt(stringNumber);
            currentOperator = button.innerText;
            history.value = userNumber + " " + currentOperator;
        }
        stringNumber = "";
    });
});

function operate (num1, num2, operator) {
    return (operator == "+") ? add(num1, num2) 
    : (operator == "-") ? subtract(num1, num2)
    : (operator == "×") ? multiply(num1, num2)
    : (operator == "÷") ? divide(num1, num2)
    : (operator == "=") ? userNumber
    : "error"
};

function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    if (b ==0) {
        stringNumber = "0";
        currentOperator = "";
        return "nice try";

    }
    return Math.round((a / b) * 100) / 100;
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