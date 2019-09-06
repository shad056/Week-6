module.exports = {
    connect: function(io, PORT) {
        io.on('connection',(socket) => {
            //When a connection request is made
            console.log('user connection on port ' + PORT + ' : ' + socket.id);

            //When a message comes, emit it to all sockets
            socket.on('message',(message) => {
                io.emit('message', message);
            });
            socket.on('user', (user) => {
                io.emit('user', user + ' has joined the chat')
            })
        });
    }
}