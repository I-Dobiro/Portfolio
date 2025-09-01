//Get references to the input elements from the DOM
const operand1Input = document.getElementById("operand1Input");  // First number input
const operatorSelect = document.getElementById("operatorSelect");  // Operator dropdown (+, -, *, /)
const operand2Input = document.getElementById("operand2Input");  // Second number input
const resultInput = document.getElementById("resultInput");  // Output field for the result

// Function to calculate and update the result input whenever a value changes
function updateResultInput() {
    // Convert the first input value to a floating-point number
    const operand1 = parseFloat(operand1Input.value);

    // Get the selected operator as a string ("+", "-", "*", or "/")
    const operator = operatorSelect.value;

    // Convert the second input value to a floating-point number
    const operand2 = parseFloat(operand2Input.value);

    // Initialize result variable
    let result;

    // Perform the operation based on the selected operator
    if (operator === "+") {
        result = operand1 + operand2;
    } else if (operator === "-") {
        result = operand1 - operand2;
    } else if (operator === "*") {
        result = operand1 * operand2;
    } else if (operator === "/") {
        result = operand1 / operand2;
    } else {
        // If the operator is not recognized, result is set to NaN
        result = NaN;
    }

    // Only display the result if it's a valid number
    if (!isNaN(result)) {
        resultInput.value = result;
    } else {
        // Otherwise, clear the result field
        resultInput.value = "";
    }
}

// Add event listeners to update the result in real time as inputs change
operand1Input.addEventListener("input", updateResultInput);  // When the first operand changes
operatorSelect.addEventListener("change", updateResultInput);  // When the operator is changed
operand2Input.addEventListener("input", updateResultInput);  // When the second operand changes
