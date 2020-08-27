const express = require("express");
const router = express.Router();

const Beer = require("../models/beer");

router.get("/list", (req, res) => {
  Beer.find({}).then((result) => res.status(200).send(result));
});

router.post("/new", (req, res) => {
  Beer.findOne({ "name.en": req.body.name.en }).then((result) => {
    if (result === null) {
      Beer.insertMany([req.body], (err) => {
        console.log(err);
      });
    } else {
      console.log(`Duplicate beer data for ${req.body.name.en}`);
    }
  });
});

module.exports = router;
