const Rating = require("../models/Rating")

module.exports = {
    index: function(req, res) {
        Rating.find({}).then(rating => res.json(rating));
    }
    // show: function(req, res) {
    //     Rating.findOne({ name: req.params.name }).then(rating => res.json(rating));
    // }
}