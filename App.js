var input = document.getElementById("inputField")

function getValue(number) {
    input.value += number;
}

function clrAll() {
    input.value = 0
}

function deleteChar() {
    input.value = input.value.slice(0, -1)
}

function Square() {
    input.value = input.value * input.value
}

function equal() {
    input.value = eval(input.value)
}