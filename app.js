const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const router = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  const statusCode = err.status || 500;
  res
    .status(statusCode)
    .json({
      message: statusCode === 500 ? "Server error" : err.message
    })
    .end();
});

//catch unCaughtException
process.on("uncaughtException", function(err) {
  console.error("uncaughtException (Node is alive)", err);
});

module.exports = app;
