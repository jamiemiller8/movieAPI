const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    Title: String,
    Year: String,
    review: [{
      type: Schema.Types.ObjectId, 
      ref: "ReviewSchema"
    }],
    Actors: String,
    Rating: [{
      type:Schema.Types.ObjectId,
      ref: "RatingSchema"
    }],
    Plot: String
})

module.exports = mongoose.model('Movie', MovieSchema)