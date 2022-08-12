var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var UserIDSchema = new Schema({
  id: ID,
  user_name: String,
});

export const UserID = mongoose.model("UserID", UserIDSchema);