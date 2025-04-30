'use strict';

let displayBox;
let inputSequence = '';

function setupCalculator() {
    displayBox = document.querySelector('#output');
    const keyContainer = document.querySelector('#keys');

    keyContainer.addEventListener('click', function (event) {
        const clicked = event.target;
        const input = clicked.getAttribute('data-key');

        if (!input) return;

        if (input === 'C') {
            inputSequence = '';
        } else if (input === '=') {
            try {
                inputSequence = new Function('return ' + inputSequence)().toString();
            } catch {
                inputSequence = 'Error';
            }
        } else {
            inputSequence += input;
        }

        displayBox.value = inputSequence;
    });
}

window.addEventListener('DOMContentLoaded', setupCalculator);
