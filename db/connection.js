const mongoose = require("mongoose");

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/movieAPI";
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
}).catch(err => console.log(err))

module.exports = mongoose;
