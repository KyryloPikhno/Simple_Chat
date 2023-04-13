const socketIO = require('socket.io');
const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('static'));

const server = http.createServer(app);

const io = socketIO(server, {cors: 'http://localhost:63342'});

io.on('connection', (socket)=>{
    console.log(socket);
})

server.listen(process.env.PORT, async () => {
    await mongoose.connect('mongodb://localhost:27017/simple-chat');
    console.log(`Server listen ${process.env.PORT}`);
});
