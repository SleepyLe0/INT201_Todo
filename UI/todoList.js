function showTodoItem(newId, newDescription) {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'todoItem')
    newDiv.setAttribute('id', newId)
    const newTodo = document.createElement('p')
    newTodo.innerText = newDescription
    const newNotDone = document.createElement('button')
    newNotDone.innerText = 'Not Done'
    const newRemove = document.createElement('button')
    newRemove.innerText = 'Remove'
    newDiv.appendChild(newTodo)
    newDiv.appendChild(newNotDone)
    newDiv.appendChild(newRemove)
    document.getElementById('listTodo').appendChild(newDiv)
}

function showNumberOfDone(numberOfDone) {
    document.getElementById('done').innerHTML = `Number of Done:${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    document.getElementById('notDone').innerHTML = `Number of Not Done:${numberOfNotDone}`
}

function removeTodoItem(removeId) {
    document.getElementById(removeId).remove()
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }