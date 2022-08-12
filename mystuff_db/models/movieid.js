var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var MovieIDSchema = new Schema({
  id: ID,
  movie_name: String,
});

export const MovieIDSchema = mongoose.model("MovieID", MovieIDSchema);