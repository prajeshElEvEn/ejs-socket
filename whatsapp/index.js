const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { logger } = require("../utils");
const { log, warn, err, success } = logger;

const handleQR = (qr) => {
  log(qr);
};

const handleReady = () => {
  success("Logged into Whatsapp");
};

const wClient = () => {
  const client = new Client({
    authStrategy: new LocalAuth(),
  });
  client.on("qr", handleQR);
  client.on("ready", handleReady);
  client.initialize();
};

module.exports = wClient;
