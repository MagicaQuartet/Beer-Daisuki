const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalConfig = require("./passport/passport-local");

const authRouter = require("./routes/auth");
const beerRouter = require("./routes/beer");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// passport 설정
// 추후에 일부 값은 환경 변수로 옮길 것
app.use(
  session({ secret: "my-secret-code", resave: true, saveUninitialized: false })
);
app.use(passport.initialize());
app.use(passport.session());
passportLocalConfig();

// router 설정
app.use("/api/auth", authRouter);
app.use("/api/beer", beerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// mongoDB
// 추후에 환경 변수로 옮길 것
const dburi = app.get("env") === "development" ? "localhost" : "mongodb";
const dbname =
  app.get("env") === "development" ? "beer-daisuki-test" : "beer-daisuki";

mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb://${dburi}/${dbname}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

module.exports = app;
