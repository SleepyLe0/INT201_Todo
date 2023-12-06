class Todo {
    static runningId = 1

    static setRunningId(loadingId) {
        Todo.runningId = loadingId
    }

    constructor(id, description, done = false) {
        this.id = id ?? Todo.runningId++
        this.description = description
        this.done = done
    }

    getTodo() {
        return this
    }

    setDescription(newDescription) {
        this.description = newDescription
    }

    setDone(done) {
        this.done = done
    }
}

export { Todo }