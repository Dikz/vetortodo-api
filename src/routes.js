const express = require('express')
const routes = express.Router()
const controllers = require('./controllers')
const path = require('path')
// lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve('src', 'database', 'tasks_db.json'))
const tasks_db = low(adapter)

//Middlewares
routes.use((req, res, next) => {
	tasks_db.set('tasks', []).write()

	next()
})

//Rotas
// * Todo
routes.get('/todo', controllers.TaskController.index)
routes.get('/todo/:id', controllers.TaskController.show)
routes.post('/todo', controllers.TaskController.store)
routes.put('/todo/:id', controllers.TaskController.update)
routes.delete('/todo/:id', controllers.TaskController.destroy)


module.exports = routes
