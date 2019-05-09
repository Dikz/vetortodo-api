const express = require('express')
const cors = require('cors')
const os = require('os')

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
			console.log('# Vetor TODO-API iniciada!')
			let interfaces = os.networkInterfaces()

			Object.keys(interfaces).forEach(function(key) {
				let name = interfaces[key]
				if (key === 'Wi-Fi') {
					console.log(`\tIP: ${name[1].address}`)
					console.log(`\tExecutando em http://${name[1].address}:3080/api/tasks`)
				}
			})
		})
	}
}

module.exports = new App()
