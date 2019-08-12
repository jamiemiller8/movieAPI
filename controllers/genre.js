const Genre = require("../models/Genre");

module.exports = {
    index: function(req, res) {
        Genre.find({}).then(genre => res.json(genre));
    },
    show: function(req, res) {
        Genre.findOne({ name: req.params.name }).then(genre => res.json(genre));
    }
}