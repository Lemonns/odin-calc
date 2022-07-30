let firstNumber = ''
let secondNumber = ''
let currentSign = null

const currentNumberScreen = document.querySelector('.arithmetic')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const lastNumberScreen = document.querySelector('.old-arithmetic')
const solveButton = document.getElementById('equal')
const clearButton = document.querySelector('.clear-btn')
const equalButton = document.getElementById('equal')

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)

    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷':
            if (b == 0) return null
            else return divide(a, b)
        default: 
            return null
    }
}


function resetCurrent() {
    currentNumberScreen.textContent = ''
}

function clear() {
    currentNumberScreen.textContent = ""
    lastNumberScreen.textContent = ""
    firstNumber = ''
    secondNumber = ''
    currentSign = null
}

function createNumber(num) {
    currentNumberScreen.textContent += num
}


function resetScreen() {
    currentNumberScreen.textContent = ""
}


function setOperator(sign) {
    if (currentSign !== null) solve()
    firstNumber = currentNumberScreen.textContent
    currentSign = sign
    lastNumberScreen.textContent = `${firstNumber} ${currentSign}`
    resetCurrent()  
}

function solve() {
    if (currentSign == '÷' && currentNumberScreen.textContent == 0) alert("Can't divide a numerator by 0")
    secondNumber = currentNumberScreen.textContent
    console.log(firstNumber)
    console.log(secondNumber)
    result = operate(currentSign, Number(firstNumber), Number(secondNumber))
    currentNumberScreen.textContent = result
    lastNumberScreen.textContent = `${firstNumber} ${currentSign} ${secondNumber}`
    currentSign = null
}



equalButton.addEventListener('click', solve)

clearButton.addEventListener('click', clear)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
)
    
numberButtons.forEach((button) =>
  button.addEventListener('click', () => createNumber(button.textContent))
)



