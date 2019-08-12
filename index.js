const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use("/genre", require("./routes/genre"));
app.use("/movie", require("./routes/movie"));
app.use("/person", require("./routes/person"));

app.listen(4000, () => console.log("server running on 4000"));