const Review = require("../models/Review");

module.exports = {
    index: function(req, res) {
        Review.find({}).then(review => res.json(review));
    }
    // show: function(req, res) {
    //     Review.findOne({ name: req.params.name }).then(review => res.json(review));
    // }
}