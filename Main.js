let min = 4;
let max = 56;

function generate_password() {
    let password = "";
       let length = document.querySelector("#password_length").value;
let uppercase = document.querySelector("#uppercase").checked;
let symbol = document.querySelector("#symbols").checked;
let number = document.querySelector("#numbers").checked;

if (uppercase + symbol + number <= 0)
return;

for (let i=0; i<length; i++) {
const r = generator (0, 2);
if(uppercase && r ===0) {
    password += generateRandomUpperCase();
} else if (symbol && r ===1) {
    password += generateRandomSymbol();
} else if (number && r ===2) {
    password += generator(0, 9);
} else {
    i--;
}
document.querySelector("#result").textContent = password;
}
}
generate_password();

function generateRandomUpperCase() {
    return String.fromCharCode(generator(65, 90));
}

function generateRandomSymbol() {
    const symbol = " ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . >";
    return symbol(generator(0, symbol.length - 1));
}

function generator() {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
