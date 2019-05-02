
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
        return res.json({page: 'store'})
    }

    async update(req, res) {
        return res.json({page: 'update'})
    }

    async destroy(req, res) {
        return res.json({page: 'destroy'})
    }
}

module.exports = new TodoController()