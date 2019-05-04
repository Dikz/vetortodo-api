const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve('src', 'database', 'tasks_db.json'))
const tasks_db = low(adapter)

const shortid = require('shortid')
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@');

// Controller geral de tarefas
class TaskController {
  async index(req, res) {
    console.log('index')
    return res.json({page: 'index'})
  }

  async show(req, res) {
    return res.json({page: 'show'})
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
    return res.json({page: 'destroy'})
  }
}

module.exports = new TaskController()
