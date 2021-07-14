var inputElement = document.querySelector('input')
var buttonElement = document.querySelector('button')
var ulElement = document.querySelector('ul')

var todos = []

buttonElement.addEventListener('click', addTodo)

function addTodo() {
    var userInput = inputElement.value
    if (userInput.trim() == '') {
        return
    }
    var newTodo = { id: Math.random(), value : userInput }
    todos.push(newTodo)
    var todoList = document.createElement('li')
    todoList.textContent = userInput
    todoList.addEventListener('click', removeTodo)
    todoList.dataset.id = newTodo.id
    ulElement.appendChild(todoList)
    console.log(todos)
}

function removeTodo(event) {
    var clickedList = event.target
    var itemId = clickedList.dataset.id
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == itemId) {
            todos.splice(i, 1)
            break
        }
    }
    clickedList.parentNode.removeChild(clickedList)
    console.log(todos)
}