const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const GenreSchema = new Schema ({
    name: String,
     movies: [{
        type: Schema.Types.ObjectId,
        ref: "Movie"
    }]
})

module.exports = mongoose.model('Genre', GenreSchema)