const asyncHandler = require("express-async-handler");

const indexController = asyncHandler(async (req, res) => {
  res.render("index");
});

module.exports = {
  indexController,
};
