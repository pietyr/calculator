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

let displayValue = 0;
let memoryValue = 0;
let nextOperation = null;

function specialOperation(operation) {}

function operate(operator) {}

function addNumber(number) {
	if (display.innerHTML == "0") {
		if (number != 0) {
			display.innerHTML = String(number);
		}
	} else {
		display.innerHTML += String(number);
	}
}
