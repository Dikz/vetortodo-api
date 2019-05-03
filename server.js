const express = require('express');
const cors = require('cors');

// Start Application
class App {
	constructor () {
		this.express = express()
	}

	init () {
		this.express.use(express.json())
		this.express.use(cors())

		this.express.use('/api', require('./src/routes'))

		this.express.listen(3080, () => {
			console.log('Vetor TODO-API iniciada!')
		})
	}
}

module.exports = new App()
