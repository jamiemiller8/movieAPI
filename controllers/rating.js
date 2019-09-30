const Rating = require("../models/Rating")

module.exports = {
    index: function(req, res) {
        Rating.find({}).then(rating => res.json(rating));
    }
}