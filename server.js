const app = require("./src/app");
const { dbConnect } = require("./src/config/dbConnect");

// server.js
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // or specify your frontend URL
    methods: ["GET", "POST"],
  },
});

//prossing to send html file
// const { createServer } = require('node:http');
const { join } = require("node:path");

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./src/index.html"));
});
// Socket.IO Events
// server.js
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Save username per socket
  socket.on("set_username", (username) => {
    socket.data.username = username;
  });

  socket.on("send_message", (data) => {
    const message = {
      text: data.text,
      senderId: socket.id,
      username: socket.data.username || "Anonymous",
      time: new Date().toLocaleTimeString(),
    };
    io.emit("new_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Server Listen
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  dbConnect();
  console.log(`Server running on port ${PORT}`);
});
