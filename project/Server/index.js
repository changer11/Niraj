const { Server } = require("socket.io");
const io = new Server(9000, {
  cors: true,
});
const emailtoSocketmap = new Map();
const socketidtoemailmap = new Map();
io.on("connection", (socket) => {
  console.log("Socket Connected", socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailtoSocketmap.set(email, socket.id);
    socketidtoemailmap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });
  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incoming:call", { from: socket.id, offer });
  });
  socket.on("call:accepted", ({ to, answer }) => {
    io.to(to).emit("call:accepted", { from: socket.id, answer });
  });
//   socket.on("peer:nego:needed", ({ to, offer }) => {
//     io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
//   });
//   socket.on('peer:nego:done', ({ to, answer }) => {
//     io.to(to).emit("peer:nego:final", { from: socket.id, answer});
//   });
// });
});