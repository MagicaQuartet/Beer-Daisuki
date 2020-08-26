const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
  },
  recentDate: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.validatePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, result) => {
    if (err) {
      callback(err, false);
    } else if (result) {
      callback(null, true);
    } else {
      callback("Invalid password", false);
    }
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
