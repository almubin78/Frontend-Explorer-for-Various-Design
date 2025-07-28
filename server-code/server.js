const app = require("./src/app");
const { dbConnect } = require("./src/config/dbConnect");


// server.js
const http = require('http');
const { Server } = require('socket.io');


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', // or specify your frontend URL
    methods: ['GET', 'POST']
  }
});


//prossing to send html file
// const { createServer } = require('node:http');
const { join } = require('node:path');

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, './src/index.html'));
});
// Socket.IO Events
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('send_message', (data) => {
    console.log('Message received:', data);
    io.emit('new_message', data); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

// Server Listen
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    dbConnect()
  console.log(`Server running on port ${PORT}`);
});
