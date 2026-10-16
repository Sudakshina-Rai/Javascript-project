// Assignment 2: Operators, Expressions, and Input Handling
// Run in a browser using index.html so prompt() is available.

const billInput = prompt("Enter bill amount:", "100");
const tipInput = prompt("Enter tip percentage:", "15");

const bill = Number(billInput);
const tipPercentage = Number(tipInput);

if (
    billInput === null ||
    tipInput === null ||
    billInput.trim() === "" ||
    tipInput.trim() === "" ||
    !Number.isFinite(bill) ||
    !Number.isFinite(tipPercentage) ||
    bill < 0 ||
    tipPercentage < 0
) {
    console.log("Invalid input. Please enter non-negative numbers.");
} else {
    const tip = bill * tipPercentage / 100;
    let total = bill;
    total += tip;

    console.log(`Subtotal: $${bill}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${tip}`);
    console.log(`Total Amount to Pay: $${total}`);
}
