class Sockets {
    constructor(io) {
        this.io = io;
        this.socketsEvents();
    }
    socketsEvents() {
        // On conection
        this.io.on('connection', (socket) => {
            // Escuchar evento Mensaje-to-server
            socket.on('Mensaje-to-server', (data) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });
        });
    }
}
module.exports = Sockets;