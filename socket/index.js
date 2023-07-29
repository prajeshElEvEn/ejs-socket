const { Server } = require("socket.io");
const { logger } = require("../utils");
const client = require("../whatsapp");
const { log, warn, err, success } = logger;

const onConnection = async (socket) => {
  log(`${socket.id} user connected`);
  client.on("qr", (qr) => {
    log(qr);
  });
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
