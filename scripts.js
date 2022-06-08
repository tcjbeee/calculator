let input1;
let input2;

function add(input1, input2) {
    let result = (input1 + input2);
    return result;
}

function subtract(input1, input2) {
    let result = (input1 - input2);
    return result;
}

function multiply (input1, input2) {
    let result = (input1 * input2);
    return result;
}

function divide(input1, input2) {
    let result = (input1 / input2);
    return result;
}

function operate() {

}

numberButtonPressed = document.querySelectorAll(".numberContainer button");

currentResult = document.querySelector(".result");



numberButtonPressed.forEach((button) =>
    button.addEventListener("click", () => appendButtonPress())
    );
    

function appendButtonPress() {
    buttonClicked = event.target;

    if (currentResult.innerHTML == 0) {
        currentResult.innerHTML = buttonClicked.innerHTML;
    }

    else {
    currentResult.innerHTML = (currentResult.innerHTML + buttonClicked.innerHTML);
    }
}

