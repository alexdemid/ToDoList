let inCreationProcess = false; 
const addBtn = document.getElementById("addBtn");

function addTodo() {
    if (inCreationProcess) return;
    startItemCreation();

    const newItemCreationDiv = document.getElementById("newItemCreation");

    const input = document.createElement("input");

    const buttonOk = document.createElement("button");
    buttonOk.textContent = "Add"
    buttonOk.onclick = () => addNewItem(input);

    const buttonCancel = document.createElement("button");
    buttonCancel.textContent = "cancel";
    buttonCancel.onclick = endItemCreation;

    newItemCreationDiv.appendChild(input);
    newItemCreationDiv.appendChild(buttonOk);
    newItemCreationDiv.appendChild(buttonCancel);
}

function addNewItem(input) {
    const newItemName = input.value;

    if (newItemName.trim().length === 0) return;

    const newItem = document.createElement("div");
    newItem.classList = ["listItem"];
    
    const span = document.createElement("span");
    span.innerText = newItemName;

    newItem.appendChild(span);

    const deleteBnt = document.createElement("button");
    deleteBnt.textContent = "delete";
    // deleteBnt.onclick = () => deleteItem(newItem);
    deleteBnt.onclick = deleteItem;
    newItem.appendChild(deleteBnt);

    document.getElementById("toDoList").appendChild(newItem);

    endItemCreation();

}

function startItemCreation() {
    inCreationProcess = true;
    addBtn.style = "display: none";
}

function endItemCreation() {
    const newItemCreationDiv = document.getElementById("newItemCreation");
    
    newItemCreationDiv.innerHTML = "";
    inCreationProcess = false;

    addBtn.style = "display: unset";
}

//  function deleteItem(newItem) {
//      newItem.remove();
// }

function deleteItem(e) {
    const htmlTodoListElemetsCollection = document.getElementById("toDoList").children;
    const todoListElementsArray = Array.from(htmlTodoListElemetsCollection);
    const clickedItem = todoListElementsArray.find(elem => elem === e.target.parentElement);
    clickedItem.remove();
}