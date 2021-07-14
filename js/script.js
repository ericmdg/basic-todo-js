var inputElement = document.querySelector('input')
var buttonElement = document.querySelector('button')
var ulElement = document.querySelector('ul')

buttonElement.addEventListener('click', addTodo)

function addTodo() {
    var userInput = inputElement.value
    if (userInput.trim() == '') {
        return
    }
    var todoList = document.createElement('li')
    todoList.textContent = userInput
    ulElement.appendChild(todoList)
}