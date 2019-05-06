const TaskFields = require('./TaskFields')

class TaskValidator {
	constructor () {
		this.fields = TaskFields.list
	}

	validate (body) {

		// result = True por default significa que é valido
		// Caso passe no teste, ele manterá true
		let result = true
		let invalidFields = [];

		Object.keys(body).map(field => {
			if (this.fields.includes(field)) return

			result = false
			invalidFields.push(field)
		})

		if (!result) {
			return {
				invalidFields: invalidFields,
				validate: result
			}
		} else {
			return {
				invalidFields: [],
				result: result
			}
		}

	}
}

module.exports = new TaskValidator()
