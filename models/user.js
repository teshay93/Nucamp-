const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
  firstName: {
    type: String,
    default: ""
  },
  lastName: {
    type: String,
    default: ""
  }

});

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);
