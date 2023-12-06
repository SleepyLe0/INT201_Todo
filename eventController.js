import { removeTodoItem, showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoList.js'
import { todoListManagement } from './lib/todoManagement.js'

const todoManagement = todoListManagement()

function addTodoHandler() {
    document.getElementById('addBtn').addEventListener('click', () => {
        const desc = document.getElementById('addTodo').querySelector('input').value
        if (desc.length !== 0) {
            showTodoItem(todoManagement.addTodo(undefined ,desc, undefined), desc)
            notDoneButtonHandler()
            removeButtonHandler()
            showNumberOfDone(todoManagement.getNumberOfDone())
            showNumberOfNotDone(todoManagement.getNumberOfNotDone())
        }
    })
}

function notDoneButtonHandler() {
    Array.from(document.getElementsByClassName('todoItem')).forEach(todo => {
        const notDoneButton = todo.querySelectorAll('button')[0]
        if (todoManagement.findTodo(Number(todo.id))?.done === true) {
            notDoneButton.innerHTML = 'Done'
            notDoneButton.style.backgroundColor = 'green'
            notDoneButton.style.color = 'white'
        }
        notDoneButton.addEventListener('click', () => {
            notDoneButton.innerHTML = 'Done'
            notDoneButton.style.backgroundColor = 'green'
            notDoneButton.style.color = 'white'
            todoManagement.setItemToDone(Number(todo.id))
            showNumberOfDone(todoManagement.getNumberOfDone())
            showNumberOfNotDone(todoManagement.getNumberOfNotDone())
        })
    })
}

function removeButtonHandler() {
    Array.from(document.getElementsByClassName('todoItem')).forEach(todo => {
        const removeButton = todo.querySelectorAll('button')[1]
        removeButton.addEventListener('click', () => {
            removeTodoItem(Number(todo.id))
            todoManagement.removeTodo(Number(todo.id))
            showNumberOfDone(todoManagement.getNumberOfDone())
            showNumberOfNotDone(todoManagement.getNumberOfNotDone())
        })
    })
}

function loadHandler() {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    if (localTodos !== null && localTodos !== undefined && localTodos.length !== 0) {
        todoManagement.loadTodos(localTodos)
        todoManagement.getTodos().forEach(todo => {
            showTodoItem(todo.id, todo.description)
        })
    }
    addTodoHandler()
    notDoneButtonHandler()
    removeButtonHandler()
    showNumberOfDone(todoManagement.getNumberOfDone())
    showNumberOfNotDone(todoManagement.getNumberOfNotDone())
}

function beforeUnloadHandler(event) {
    event.preventDefault()
    localStorage.setItem('todos', JSON.stringify(todoManagement.getTodos()))
} 

export { loadHandler, beforeUnloadHandler }