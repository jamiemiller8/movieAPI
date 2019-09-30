const Review = require("../models/Review");

module.exports = {
    index: function(req, res) {
        Review.find({}).then(review => res.json(review));
    }
}