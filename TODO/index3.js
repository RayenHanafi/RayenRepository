const name = document.getElementById('name');
const content = document.getElementById('content');
let todoList = document.getElementById('todoList');



document.getElementById('addTodo').addEventListener('click', () => {
    if (name.value.trim() === "" || content.value.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }
    const suppButton = document.createElement('button');
    suppButton.textContent = '🗑';
    const todo = document.createElement('li');
    todo.textContent = name.value + ' : ' + content.value;
    todo.classList.add('list-group-item');
    todo.appendChild(suppButton);
    todoList.appendChild(todo);
    name.value = '';
    content.value = '';
    suppButton.addEventListener('click', () => {
      todoList.removeChild(todo);
  });
});