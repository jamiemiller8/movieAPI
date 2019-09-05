const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema ({
    display_title: String,
    summary_short: String 
})

module.exports = mongoose.model('ReviewSchema', ReviewSchema)
