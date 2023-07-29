const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { logger } = require("../utils");
const { log, warn, err, success } = logger;

const handleReady = () => {
  success("Logged into Whatsapp");
};

const client = new Client({
  authStrategy: new LocalAuth(),
});
client.on("ready", handleReady);
client.initialize();

module.exports = client;
