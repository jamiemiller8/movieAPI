const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const RatingSchema = new Schema ({
    Title: String,
    Ratings: [
        {
            Source: String,
            Value: String
        }
    ]

})

module.exports = mongoose.model('RatingSchema', RatingSchema)