const bcrypt = require("bcrypt-nodejs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(null, user);
    });
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        session: true,
        passReqToCallback: false,
      },
      (username, password, done) => {
        User.findOne({ username })
          .then((user) => {
            if (!user) {
              return done(null, false);
            }
            return user.validatePassword(password, (err, isValid) => {
              if (isValid) {
                return done(null, user);
              } else {
                return done(null, false);
              }
            });
          })
          .catch((err) => {
            console.log(err);
            return done(err);
          });
      }
    )
  );
};
