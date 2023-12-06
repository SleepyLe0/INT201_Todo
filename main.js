import { loadHandler, beforeUnloadHandler } from './eventController.js'

window.addEventListener('load', () => {
    loadHandler()
})

window.addEventListener('unload', (e) => {
    beforeUnloadHandler(e)
})




