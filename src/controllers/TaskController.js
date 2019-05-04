const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve('src', 'database', 'tasks_db.json'))
const tasks_db = low(adapter)

const shortid = require('shortid')
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@');

// Criando base das tasks
tasks_db.has('tasks').value() ? '' : tasks_db.set('tasks', []).write()

// Controller geral de tarefas
class TaskController {
  async index(req, res) {
    console.log('index')
    return res.json({page: 'index'})
  }

  async show(req, res) {
		const task = await tasks_db.get('tasks').find({id: req.params.id}).value()

		res.json(task)
  }

  async store(req, res) {
		const task = {
			id: shortid.generate(),
			...req.body,
			createdAt: new Date()
		}

		tasks_db.get('tasks').push(task).write()
		res.json(task)
  }

  async update(req, res) {
    return res.json({page: 'update'})
  }

  async destroy(req, res) {
		await tasks_db.get('tasks').remove({id: req.params.id}).write()
		return res.send()
  }
}

module.exports = new TaskController()
