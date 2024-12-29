const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let previousInput = "";
let operator = "";

function updateDisplay(value) {
    resultDisplay.textContent = value || "0";
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        if (!isNaN(buttonText) || buttonText === ".") {
            currentInput += buttonText;
            updateDisplay(currentInput);
        } else if (buttonText === "=") {
            if (previousInput && currentInput && operator) {
                const result = calculate(previousInput, currentInput, operator);
                updateDisplay(result);
                previousInput = result;
                currentInput = "";
                operator = "";
            }
        } else if(buttonText==="C"){
             currentInput="";
             previousInput="";
             operator="";
            updateDisplay("0");
        }
            else {
            if (currentInput) {
                if (previousInput && operator) {
                    previousInput = calculate(previousInput, currentInput, operator);
                    updateDisplay(previousInput);
                } else {
                    previousInput = currentInput;
                }
                currentInput = "";
                operator = buttonText;
            }
        }
    });
});

function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": 
            if (b === 0) {
                return "Error";
            }
            return a / b;
        default: return "Error";
    }
}
