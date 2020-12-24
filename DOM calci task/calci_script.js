var display = document.getElementById('display')
var inputs = document.getElementsByClassName('input')
var equal = document.getElementById('equals')
var currentInputValue,displayValue,result,i; 
 // display the calculated result
function displayResult() {
    displayValue = display.value;
    result = eval(displayValue);
    display.value = result;
}

// displaying numericals and keynote
function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        alert("Enter only NUMBERS")
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            display.value += "0";
        } else if (key.which === 49) {
            display.value += "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 42) {
                isplay.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 13) {
            displayResult();
        } else {
            display.value = display.value;
        }
        return true;
    }
}
window.onload = function () {
    document.onkeypress = keyboardInput;
     // numberic values input
    for (i = 0; i < inputs.length; i++) {
        inputs[i].onclick = dataInput;
    }
    // displaying the calculated result
    equal.onclick = displayResult;
};
