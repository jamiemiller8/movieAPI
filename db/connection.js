const mongoose = require("mongoose");
// let mongoURI = "mongodb://localhost:27017/movieAPI";
let mongoURI = "";
if(process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/movieAPI"
}

mongoose.connect(mongoURI, { useNewUrlParser: true})

module.exports = mongoose;