class RealtimeController {

	init (io) {
		let usersOnline = 0

		io.on('connection', function(socket) {
			// Evento para o front quando conectado
			usersOnline++
			io.emit('usersOnline' , usersOnline)

			// Quando o usuario desconectar
			socket.on('disconnect', () => {
				usersOnline--
				io.emit('usersOnline' , usersOnline)
			})
		})

	}
}

module.exports = new RealtimeController()
