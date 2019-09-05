const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use("/movie", require("./routes/movie"));
app.use("/review", require("./routes/review"));
app.use('/rating', require("./routes/rating"));


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`PORT: ${app.get("port")}`);
});

// app.listen(4000, () => console.log("server running on 4000"));