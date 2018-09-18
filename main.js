// In the code below...

// Replace the word event in the addEventListener method with the appropriate string to handle a click event
// Write a function named handlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
// <section id="flight" class="power disabled">
// Should then look like this.

// <section id="flight" class="power enabled">

// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. 
// You will need to use the document.querySelectorAll() method for these.

// One Step Further
// You may notice that your code to enable individual powers (not all at once) is very similar.
// To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. 
// (Hint: one way to get started is to use event.target.id.split("-") in your function)

const handlerFunction = () => {
    let idArray = event.target.id.split("-");
    let enabler = document.getElementById(idArray[1]);
    enabler.classList.remove('disabled');
    enabler.classList.add('enabled');
    };


const enableAll = () => {
    let enabler = document.querySelectorAll(".power");
    for (let i = 0; i < enabler.length; i++) {
    enabler[i].classList.remove('disabled');
    enabler[i].classList.add('enabled');
    }
};

const disableAll = () => {
    let enabler = document.querySelectorAll(".power");
    for (let i = 0; i < enabler.length; i++) {
    enabler[i].classList.remove('enabled');
    enabler[i].classList.add('disabled');
    }
};    

document.querySelector("#activate-flight").addEventListener('click', handlerFunction);
document.querySelector("#activate-mindreading").addEventListener('click', handlerFunction);
document.querySelector("#activate-xray").addEventListener('click', handlerFunction);
document.querySelector("#activate-all").addEventListener('click', enableAll);
document.querySelector("#deactivate-all").addEventListener('click', disableAll);
