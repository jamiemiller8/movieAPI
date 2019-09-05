const mongoose = require("mongoose");
let mongoURI = "";
if(process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/movieAPI"
}

mongoose.connect(mongoURI, { useNewUrlParser: true}).catch(e => console.log(e))

module.exports = mongoose;