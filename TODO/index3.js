const name = document.getElementById('name');
const content = document.getElementById('content');
let todoList = document.getElementById('todoList');



document.getElementById('addTodo').addEventListener('click', () => {
    const todo = document.createElement('li');
    todo.textContent = name.value + ' : ' + content.value;
    todo.classList.add('list-group-item');
    todoList.appendChild(todo);
    name.value = '';
    content.value = '';
});