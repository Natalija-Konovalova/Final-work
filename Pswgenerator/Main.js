const button = document.querySelector(".button")
const passwordElement = document.getElementById("password")
const passwordParentElement = document.getElementById("password-parent")
const passwordLengthElement = document.getElementById("password_length")
const numbersCheckbox = document.getElementById("numbers_checkbox")
const lettersCheckbox = document.getElementById("letters_checkbox")
const specialSymbolsCheckbox = document.getElementById("special_symbols_checkbox")

let result = ""
let passwordLength = "8"

passwordLengthElement.addEventListener("change", (e) => {
    passwordLength = Number(e.target.value)
})

button.addEventListener("click", () => {
if(numbersCheckbox.checked) {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
} else { numbers = [""]
}
if(lettersCheckbox.checked) {
    latinSymbols = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]
} else { latinSymbols = [""]
}
if(specialSymbolsCheckbox.checked) {
    specialSymbols = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~"
    ]
} else { specialSymbols = [""]
}

const symbolsArray = [numbers, latinSymbols, specialSymbols]

if(!numbersCheckbox.checked && !lettersCheckbox.checked && !specialSymbolsCheckbox.checked) {
    alert("Password should include any symbols")
} else {
    while(result.length <= passwordLength) {
        let isUpperCase = Math.round(Math.random() * 3) ==2
        let currentArray = symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
        if(isUpperCase) {
            result += currentArray[Math.floor(Math.random()* currentArray.length)].toString().toUpperCase()
        } else {
            result += currentArray[Math.floor(Math.random()* currentArray.length)]
        }
    }
}
    passwordElement.innerHTML = result
    result = ""
 
    }
    )

let copyText = document.querySelector(".settings2");
copyText.querySelector(".buttonCopy").addEventListener("click", function() {
    let input = copyText.querySelector("#password");
    const textToCopy = input.textContent
    .trim();
   
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Password copied!");
        input.textContent = "";
        
    })
})
