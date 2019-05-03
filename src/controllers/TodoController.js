const path = require('path')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.resolve('src', 'database', 'tasks_db.json'))
const tasks_db = low(adapter)

// Controller geral de tarefas
class TodoController {
  async index(req, res) {
    console.log('index')
    return res.json({page: 'index'})
  }

  async show(req, res) {
    return res.json({page: 'show'})
  }

  async store(req, res) {
    const task = req.body

		res.json(task)
  }

  async update(req, res) {
    return res.json({page: 'update'})
  }

  async destroy(req, res) {
    return res.json({page: 'destroy'})
  }
}

module.exports = new TodoController()
