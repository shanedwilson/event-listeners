const toDoInputElem = document.getElementById('toDoInput');
const notesInputElem = document.getElementById('notesInput');

const submitToDoButtonElem = document.getElementById('submitToDoButton');


const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton');

    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener('click', (e) => {
            // card that button was on
            const buttonClicked = e.target;
            // .parentNode.remove
            buttonClicked.parentNode.parentNode.remove();
        })
    }
};

// document.querySelector('body').addEventListener('click', function(event) {
//     if (event.target.classList.contains('deleteButton')) {
//         element.addEventListener('click', (e) => {
//             // card that button was on
//             const buttonClicked = e.target;
//             // .parentNode.remove
//             buttonClicked.parentNode.parentNode.remove();        
//     }
// })

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
};

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card text-center w-25 m-2 mx-auto">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <button href="#" class="btn btn-danger deleteButton">Delete This Shit!</button>
    </div>
  </div>`;

    printToDom(domString, 'toDoCards');
    activateDeletes();
};

submitToDoButtonElem.addEventListener('click', (e) => {
    e.preventDefault();

    buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
   
});