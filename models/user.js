var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var User = new Schema({
  firstname: {
    type: String,
    default: "",
  },
  admin: {
    type: Boolean,
    default: false,
  },
  lastname: {
    type: String,
    default: "",
  },
});

User.plugin(passportLocalMongoose);

const Users = mongoose.model("User", User);
module.exports = Users;
