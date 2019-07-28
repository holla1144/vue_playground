const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  password: {
    type: String,
    required: true,
  },
  cardSets: {
    type: Array,
    default: []
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePasswords = function(candidatePassword) {
  const self = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, self.password, function(err, isMatch) {
      if (err) reject(err);
      resolve(isMatch);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
