const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const { logger } = require("./utils");
const { log, success, err, warn } = logger;
const socketIO = require("./socket");

dotenv.config();
const app = express();
const server = http.createServer(app);
socketIO(server);
const port = process.env.PORT || 8000;

app.use(express.static("public"));
app.use("/styles", express.static(__dirname + "public/styles"));
app.use("/src", express.static(__dirname + "public/src"));
app.use("/assets", express.static(__dirname + "public/assets"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(port, () => {
  success(`Server running on http://localhost:${port}`);
});
