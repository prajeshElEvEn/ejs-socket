const { Server } = require("socket.io");
const { logger } = require("../utils");
const { log, warn, err, success } = logger;

const onConnection = (socket) => {
  log(`${socket.id} user connected`);
};

const socketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", onConnection);
};

module.exports = socketIO;
