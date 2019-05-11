class TaskEvents {

	afterCreate (io, task) {
		io.emit('TaskCreated', task)
	}

	afterUpdate (io, task) {
		io.emit('TaskUpdated', task)
	}

	afterDelete (io, task) {
		io.emit('TaskDeleted', task)
	}
}

module.exports = new TaskEvents()
