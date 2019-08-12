const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const PersonSchema = new Schema ({
    name: String,
    movies: [{
        type: Schema.Types.ObjectId, 
        ref: "Movie"
      }]
})

module.exports = mongoose.model('Person', PersonSchema)