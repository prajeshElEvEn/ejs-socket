const { Server } = require("socket.io");
const { logger } = require("../utils");
const client = require("../whatsapp");
const { log, warn, err, success } = logger;
const qrcode = require("qrcode");

const onConnection = async (socket) => {
  log(`${socket.id} user connected`);
  socket.on("disconnect", () => {
    warn(`${socket.id} disconnected!`);
  });
};
const socketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", onConnection);
  client.on("qr", (qr) => {
    log(qr);
    qrcode.toDataURL(qr, (err, url) => {
      if (err) {
        err(err);
      } else {
        io.emit("qrCodeUrl", url);
      }
    });
  });
};

module.exports = socketIO;
