const express = require("express");
const router = express.Router();

const Beer = require("../models/beer");

router.get("/list", (req, res) => {
  Beer.find({})
    .exec()
    .then((result) => res.status(200).send(result));
});

router.post("/new", (req, res) => {
  Beer.insertMany([req.body], (err, docs) => {
    console.log(err);
  });
});

module.exports = router;
