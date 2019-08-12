const Movie = require("../models/Movie");

module.exports = {
    index: function(req, res) {
        Movie.find({}).then(movie => res.json(movie));
    },
    show: function(req, res) {
        Movie.findOne({ name: req.params.name}).then(movie => res.json(movie));
    },
    create: function(req, res) {
        Movie.create(req.body).then(movie => res.json(movie));
    },
    update: function(req, res) {
        Movie.findByIdAndUpdate({name: req.params.name}, req.body).then(movie => res.json(movie));
    },
    delete: function(req, res) {
        Movie.findOneAndDelete({name: req.params.name}).then(movie => res.json(movie));
    }
}