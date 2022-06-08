let input1;
let input2;
let result;
operatorClicked = false;
resultGot = false;
cleared = false;

function add(input1, input2) {
    result = (input1 + input2);
    return result;
}

function subtract(input1, input2) {
    result = (input1 - input2);
    return result;
}

function multiply (input1, input2) {
    result = (input1 * input2);
    return result;
}

function divide(input1, input2) {
    result = (input1 / input2);
    return result;
}

function operate() {
    input1 = Math.floor(input1);
    input2 = Math.floor(input2);
    cleared = false;
    if (operator.innerHTML == "+") {
        console.log(input1);
        console.log(input2);
        add(input1, input2);
        console.log(result);
    }
    else if (operator.innerHTML == "-") {
        subtract(input1, input2);
    }
    else if (operator.innerHTML == "x") {
        multiply (input1, input2);
    }
    else {
        divide(input1, input2);
    }
}

numberButtonPressed = document.querySelectorAll(".numberContainer button");

operatorButtonPressed = document.querySelectorAll(".functionContainer button");

clearButton = document.querySelector("#clear");

equalsButton = document.querySelector("#equalsButton");

currentResult = document.querySelector(".result");

clearButton.addEventListener("click", function reset() {
    input1 = 0;
    input2 = 0;
    currentResult.innerHTML = 0;
    operatorClicked = false;
    resultGot = false;
    cleared = false;
})

numberButtonPressed.forEach((button) =>
    button.addEventListener("click", () => appendButtonPress()));
    

function appendButtonPress() {
    buttonClicked = event.target;

    if (currentResult.innerHTML == 0) {
        currentResult.innerHTML = buttonClicked.innerHTML;
    }

    else if (resultGot == true && cleared == false) {
        currentResult.innerHTML = "";
        cleared = true;
        currentResult.innerHTML = (currentResult.innerHTML + buttonClicked.innerHTML);
    }

    else if (operatorClicked == true && cleared == false) {
        currentResult.innerHTML = "";
        cleared = true;
        currentResult.innerHTML = (currentResult.innerHTML + buttonClicked.innerHTML);
    }

    else {
    currentResult.innerHTML = (currentResult.innerHTML + buttonClicked.innerHTML);
    }
}


operatorButtonPressed.forEach((button) =>
    button.addEventListener("click", () => storeOperator()));

equalsButton.addEventListener("click", () =>  operate());


function storeOperator() {
    if (operatorClicked == false) {
        operator = event.target;
        input1 = currentResult.innerHTML;
        operatorClicked = true;
        input1 = currentResult.innerHTML;
    }

    else {
        input2 = currentResult.innerHTML;
        operate();
        result = result.toString();
        console.log(result);
        currentResult.innerHTML = result;
        resultGot = true;
        operatorClicked = false;
        storeOperator();
    }

}
