const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    title: String,
    year: Number,
    // genres: [{
    //   type: Schema.Types.ObjectId, 
    //   ref: "Genre"
    // }],
    genres: String,
    actors: String,
    plot: String
})

module.exports = mongoose.model('Movie', MovieSchema)