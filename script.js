"use strict";

const display = document.querySelector("div.display > span");
const keyboard = document.querySelector("div.keyboard-wrapper");
keyboard.addEventListener("click", function handleButton(event) {
	const button = event.target;
	if (button.type) {
		const buttonValue = button.value;
		if (button.dataset.type == "special") {
			specialOperation(buttonValue);
		}

		if (button.dataset.type == "operator") {
			operate(buttonValue);
		}

		if (button.dataset.type == "number") {
			addNumber(Number(buttonValue));
		}
	}
});

let memoryValue = 0;
let nextOperation = null;
let lastButton = null;

function specialOperation(operation) {
	if (operation == "clear") {
		memoryValue = 0;
		nextOperation = null;
		lastButton = null;
		display.innerHTML = "0";
	}
	if (operation == "backspace") {
		display.innerHTML = display.innerHTML.slice(0, -1);
	}
	if (operation == "sign") {
	}
}

function operate(operator) {
	if (nextOperation == null) {
		if (operator != "result") {
			nextOperation = operator;
			memoryValue = Number(display.innerHTML);
		}
	} else {
		memoryValue = calculate(
			memoryValue,
			Number(display.innerHTML),
			nextOperation
		);
		if (operator != "result") {
			nextOperation == operator;
		}
		display.innerHTML = memoryValue;
	}

	lastButton = "operator";
}

function addNumber(number) {
	if (lastButton == "operator") {
		display.innerHTML = String(number);
	} else {
		if (display.innerHTML == "0") {
			if (number != 0) {
				display.innerHTML = String(number);
			}
		} else {
			display.innerHTML += String(number);
		}
	}
}

function calculate(number1, number2, operator) {
	if (operator == "percent") {
	}
	if (operator == "divide") {
		return number1 / number2;
	}
	if (operator == "multiply") {
		return number1 * number2;
	}
	if (operator == "subtract") {
		return number1 - number2;
	}
	if (operator == "add") {
		return number1 + number2;
	}
}
