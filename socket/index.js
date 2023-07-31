const { Server } = require("socket.io");
const { logger } = require("../utils");
const client = require("../whatsapp");
const { log, warn, err, success } = logger;
const qrcode = require("qrcode");

const socketIO = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    log(`${socket.id} user connected`);
    socket.on("disconnect", () => {
      warn(`${socket.id} disconnected!`);
    });
  });
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
  client.on("ready", () => {
    io.emit("loggedIn");
  });
  client.on("auth_failure", (error) => {
    io.emit("authFailed:", error);
  });
  client.on("disconnected", () => {
    io.emit("loggedOut");
  });
};

module.exports = socketIO;
