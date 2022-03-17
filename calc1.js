// clearScreen() function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// display() function display values
function display(value) {
    document.getElementById("result").value += value;
}
// calculate() function calculates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}