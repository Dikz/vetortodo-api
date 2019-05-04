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
routes.get('/tasks', controllers.TaskController.index)
routes.get('/tasks/:id', controllers.TaskController.show)
routes.post('/tasks', controllers.TaskController.store)
routes.put('/tasks/:id', controllers.TaskController.update)
routes.delete('/tasks/:id', controllers.TaskController.destroy)


module.exports = routes
