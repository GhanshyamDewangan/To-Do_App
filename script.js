const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;


const addTodo = ()=> {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("Must write somthing in To do ");
        return false;
    }

    if(addBtn.value === "Update"){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Create";
        inputBox.value = "";
    }
    else {
    // Creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    // Creating Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Update";
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    // Creating Delete Button
    const deletBtn = document.createElement("button");
    deletBtn.innerText = "Remove";
    deletBtn.classList.add("btn","deleteBtn");
    li.appendChild(deletBtn);

    todoList.appendChild(li);
    inputBox.value = "";
    }
}
addBtn.addEventListener('click', addTodo);

const updateTodo = (e) => {
    if(e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML === "Update"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Update";
        editTodo = e;
    }
}
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);