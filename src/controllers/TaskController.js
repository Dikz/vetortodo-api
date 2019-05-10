const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve('src', 'database', 'tasks_db.json'))
const tasks_db = low(adapter)

const shortid = require('shortid')
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@');

const paginate = require('paginate-array')
const TaskValidator = require('../validators/TaskValidator')

// Criando base das tasks
tasks_db.has('tasks').value() ? '' : tasks_db.set('tasks', []).write()

// Controller geral de tarefas
class TaskController {
  async index(req, res) {
		const page = req.query.page || 1
		let tasks = []

		if (req.query.status) {
			tasks = await tasks_db.get('tasks').filter({status: req.query.status}).orderBy('createdAt', 'desc')
		} else {
			tasks = await tasks_db.get('tasks').orderBy('createdAt', 'desc').orderBy('status', 'desc')
		}

		// Paginação
		const paginated = await paginate(Array.from(tasks), page)

		res.json(paginated)
  }

  async show(req, res) {
		const task = await tasks_db.get('tasks').find({id: req.params.id}).value()

		res.json(task)
  }

  async store(req, res) {
		const task = {
			id: shortid.generate(),
			...req.body,
			createdAt: new Date(),
			status: req.body.status || 'pending'
		}

		let validate = await TaskValidator.validate(req.body)

		if (validate.result) {
			tasks_db.get('tasks').push(task).write()
			//task.validate = validate

			let response = task
			response.validate = validate
			res.json(response)
		} else {
			res.json(validate)
		}


  }

  async update(req, res) {
		const task = await tasks_db.get('tasks')
			.find({id: req.params.id})
			.assign({...req.body}).write()

		res.json(task)
  }

  async destroy(req, res) {
		await tasks_db.get('tasks').remove({id: req.params.id}).write()
		return res.send()
  }
}

module.exports = new TaskController()
