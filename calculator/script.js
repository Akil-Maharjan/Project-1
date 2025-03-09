function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (value === 'π') {
        display.value += Math.PI;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/π/g, Math.PI));
    } catch (error) {
        display.value = "Error";
    }
}

function convertToFraction() {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        // Convert to fraction (using a simple approximation)
        const fraction = value.toString().includes('.') 
            ? value.toString().split('.').map(num => num.length).reduce((a, b) => Math.pow(10, b) * a, 1)
            : 1;
        display.value = `${Math.round(value * fraction)}/${fraction}`;
    } else {
        display.value = "Error";
    }
}
