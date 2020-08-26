const bcrypt = require("bcrypt-nodejs");
const passport = require("passport");
const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/signup", (req, res) => {
  const username = req.body.username;

  User.findOne({ username }).then((user) => {
    if (user !== null) {
      res.send({ success: false, message: "이미 존재하는 사용자입니다." });
    } else {
      bcrypt.hash(req.body.password, null, null, (err, hash) => {
        User.create({
          username,
          password: hash,
          createdDate: Date.now(),
        }).then(() =>
          res.send({ success: true, message: "사용자 등록이 완료되었습니다." })
        );
      });
    }
  });
});

router.post("/signin", passport.authenticate("local"), (req, res) => {
  res.send({
    success: true,
    user: {
      userID: req.user._id,
      username: req.user.username,
    },
  });
});

module.exports = router;
