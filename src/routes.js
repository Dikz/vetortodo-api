const express = require('express')
const routes = express.Router()
const controllers = require('./controllers')

//Rotas
// * Todo
routes.get('/todo', controllers.TodoController.index)
routes.get('/todo/:id', controllers.TodoController.show)
routes.post('/todo', controllers.TodoController.store)
routes.put('/todo/:id', controllers.TodoController.update)
routes.delete('/todo/:id', controllers.TodoController.destroy)


module.exports = routes
