let display = document.getElementById("display");

// Append number or operator to the display
function append(value) {
display.value += value;
}

// Clear the entire display
function clearDisplay() {
display.value = "";
}

// Delete the last character
function del() {
display.value = display.value.slice(0, -1);
}

// Perform the calculation safely
function calculate() {
try {
if (display.value.trim() === "") {
display.value = "";
return;
}
// Evaluate the expression
let result = eval(display.value);
// Limit decimal places
if (typeof result === "number" && !Number.isInteger(result)) {
result = result.toFixed(4);
}
display.value = result;
} catch (error) {
display.value = "Error";
}
}

// Optional: Allow keyboard input
document.addEventListener("keydown", function (event) {
const key = event.key;
if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
append(key);
} else if (key === "Enter") {
calculate();
} else if (key === "Backspace") {
del();
} else if (key.toLowerCase() === "c") {
clearDisplay();
}
});
