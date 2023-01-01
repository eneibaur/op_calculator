const numButtons = document.querySelectorAll('.button-number');
const opButtons = document.querySelector('.button-operator');

let stringNumber = "";
let userNumber = 0;

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        stringNumber = stringNumber + button.innerText;
        console.log(stringNumber);
    });
});

// operatorButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         userNumber = parseInt(currentNumber);
//         console.log(userNumber);
//     });
// });


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