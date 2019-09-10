const Movie = require("../models/Movie");

module.exports = {
  index: function(req, res) {
    Movie.find({}).then(movie => res.json(movie));
  },
  show: function(req, res) {
    Movie.find({ Title: req.params.title }).then(movie => res.json(movie));
  },
  create: function(req, res) {
    Movie.create(req.body).then(movie => res.json(movie));
  },
  update: function(req, res) {
    Movie.findOneAndUpdate(
      { Title: req.params.title },
      { $set: { Title: req.body.Title } }
    ).then(movie => res.json(movie));
  },
  delete: function(req, res) {
    Movie.findOneAndDelete({ Title: req.params.title }).then(movie =>
      res.json(movie)
    );
  }
};
