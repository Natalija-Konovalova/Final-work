// const calculator = document.querySelector(".calculator");
// const btnNumber = document.querySelector(".btn number");
const display = document.querySelector(".display");
// const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
let buttons = Array.from(document.querySelectorAll("button"));

buttons.map((button) => {
    button.addEventListener('click', (e) => {
switch (e.target.innerText) {
case "C":
    display.innerText = "0";
    break;
case "=":
        try {
        display.innerText = eval(display.innerText);
} catch (e) {
        display.innerText = "Error!";
}
    // break;
    // case "+/-":
    // display.innerText = "-";
    // break;

    // case "*//":
    // display.innerText = "*";

    default:
    if (display.innerText === "0"&& e.target.innerText != ".") {
        display.innerText = e.target.innerText;
    } else {
        display.innerText += e.target.innerText;
    }
}

    })
})