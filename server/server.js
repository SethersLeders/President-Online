const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('send_message', (data) => {
        console.log(data);
        socket.broadcast.emit('receive_message', data);
    })

    socket.on('request_lobby', () => { console.log('Change route to create-lobby') });

    socket.on('find_lobby', (lobbyId) => {
        console.log('=============================\n', lobbyId);
    });
});

const PORT = 3001 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));