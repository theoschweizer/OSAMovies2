var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var MovieSchema = new Schema({
    id: ID,
    image_url: String,
    id_list: [ID],
});

export const Movie = mongoose.model("Movie", MovieSchema);