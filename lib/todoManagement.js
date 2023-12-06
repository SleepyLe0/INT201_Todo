import { Todo } from './todo.js'

function todoListManagement() {
    const todos = []

    function addTodo(id, desc, done) {
        todos.push(new Todo(id, desc, done))
        return todos[todos.length - 1].id
    }

    function findTodo(searchId) {
        return todos.find(todo => todo.id === searchId)
    }

    function findIndexTodo(searchId) {
        return todos.findIndex(todo => todo.id === searchId)
    }

    function removeTodo(removeId) {
        todos.splice(findIndexTodo(removeId), 1)
    }

    function getTodos() {
        return todos
    }

    function getNumberOfDone() {
        let count = 0
        todos.forEach((todo) => {
            if (todo.done === true) count++
        })
        return count
    }

    function getNumberOfNotDone() {
        let count = 0
        todos.forEach((todo) => {
            if (todo.done === false) count++
        })
        return count
    }

    function clearTodo() {
        todos.splice(0, todos.length)
    }

    function setItemToDone(doneId) {
        findTodo(doneId).setDone(true)
    }

    function loadTodos(userTodos) {
        Todo.setRunningId(userTodos[userTodos.length - 1].id + 1)
        userTodos.forEach(todo => {
            addTodo(todo.id, todo.description, todo.done)
        })
    }
    
    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getTodos,
        getNumberOfDone,
        getNumberOfNotDone,
        clearTodo,
        setItemToDone,
        loadTodos,
    }
}

export { todoListManagement }