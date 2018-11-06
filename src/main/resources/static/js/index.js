const { getStarWarsPerson } = require('./api')

const entry = document.querySelector('#app')
const app = new App()

entry.innerHTML = app.render()
