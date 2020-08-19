const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: {
    en: {
      type: String,
      required: true,
    },
    ko: {
      type: String,
      required: true,
    },
  },
  type: String,
  brewery: String,
  country: String,
  rating: {
    score: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  imgSrc: {
    beer: String,
    brewery: String,
  },
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
